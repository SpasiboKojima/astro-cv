import mediumZoom, { type Zoom } from 'medium-zoom-next';
import type { JSX } from 'solid-js';
import { createSignal, For, splitProps } from 'solid-js';
import type { DOMElement } from 'solid-js/jsx-runtime';
import type { ImageOpts } from '~/lib/image';
import LoadingSpinner from './LoadingSpinner';

let zoomRef: Zoom;
export function getZoom() {
	if (!zoomRef) {
		zoomRef = mediumZoom();
	}

	return zoomRef;
}

interface PictureProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
	options: ImageOpts;
}

const Picture = (props: PictureProps) => {
	const [localProps, imageProps] = splitProps(props, ['options', 'sizes']);
	const options = () => localProps.options;

	const getSrc = () => {
		const src = options().origSrc;
		return typeof src === 'string' ? src : src.src;
	};

	return (
		<picture>
			<For each={options().srcSet} fallback={null}>
				{(item) => <source sizes={localProps.sizes} srcset={item.src} type={`image/${item.format}`} />}
			</For>
			<img {...imageProps} alt={props.alt} src={getSrc()} />
		</picture>
	);
};

interface ImageZoomProps extends Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'onClick'> {
	options: ImageOpts;

	class: JSX.HTMLAttributes<'button'>['class'];
	onClick?: (
		e: MouseEvent & {
			currentTarget: HTMLButtonElement;
			target: DOMElement;
		},
		setIsLoading: (value: boolean) => void
	) => void;
}

export function ImageZoom(props: ImageZoomProps) {
	const [localProps, imageProps] = splitProps(props, ['class', 'onClick', 'ref', 'aria-label']);

	const [isLoading, setIsLoading] = createSignal(false);

	return (
		<button
			aria-label={localProps['aria-label']}
			on:click={{ capture: true, handleEvent: (e) => localProps.onClick?.(e, setIsLoading) }}
			class={localProps.class}
		>
			<Picture {...imageProps} ref={props.ref} />
			<LoadingSpinner isLoading={isLoading} />
		</button>
	);
}
