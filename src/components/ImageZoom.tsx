import mediumZoom, { type Zoom } from '@spasibokojima/medium-zoom';
import type { JSX } from 'solid-js';
import { createSignal, For, onMount, Show, splitProps } from 'solid-js';
import type { ImageOpts } from '~/lib/image';

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

export const [loadedImages, setLoadedImages] = createSignal<Record<string, boolean>>({});

// let zoomRef: Zoom;
// export function getZoom() {
// 	if (!zoomRef) {
// 		zoomRef = mediumZoom({ background: 'rgba(0, 0, 0, 0.75)' });
// 	}

// 	return zoomRef;
// }

type ImageZoomProps = JSX.ImgHTMLAttributes<HTMLImageElement> & {
	// zoomOptions?: ZoomOptions;
	options: ImageOpts;

	class: JSX.HTMLAttributes<'button'>['class'];
	onClick?: () => void;
	ref?: (el: HTMLImageElement | undefined) => void;
	id: string;
};

export function ImageZoom(props: ImageZoomProps) {
	const [localProps, imageProps] = splitProps(props, ['class', 'onClick', 'ref', 'aria-label']);

	let imgRef: HTMLImageElement | undefined;
	const isLoaded = () => loadedImages()[props.id];

	const [isLoading, setIsLoading] = createSignal(false);

	let zoomRef: Zoom;
	function getZoom() {
		if (!zoomRef) {
			zoomRef = mediumZoom({ background: 'rgba(0, 0, 0, 0.75)' });
		}

		return zoomRef;
	}

	const attachZoom: (el: HTMLImageElement) => void = (node) => {
		const zoom = getZoom();
		if (!zoom) return;

		if (node) {
			zoom.attach(node);
		} else {
			zoom.detach();
		}
	};

	onMount(() => {
		attachZoom(imgRef!);
	});

	return (
		<button
			aria-label={localProps['aria-label']}
			onClick={(e) => {
				// e.preventDefault();
				// e.stopPropagation();
				e.stopImmediatePropagation();

				if (!imgRef) return;

				localProps.onClick?.();
				const hdSource = imageProps.options.src[imgRef.currentSrc.endsWith('avif') ? 0 : 1];

				// imgRef.setAttribute('data-zoom-src', hdSource);
				// return;

				console.log('isLoaded() :>> ', isLoaded());
				if (isLoaded()) {
					imgRef.setAttribute('data-zoom-src', hdSource);
					return getZoom().open();
					// return getZoom().open({ target: imgRef });
				}

				setIsLoading(true);

				const image = new Image();
				image.src = hdSource;
				image.onload = () => {
					setIsLoading(false);
					setLoadedImages({ ...loadedImages(), [props.id]: true });

					imgRef?.setAttribute('data-zoom-src', hdSource);

					zoomRef.open();
					// zoomRef.open({ target: imgRef });
				};
			}}
			class={localProps.class}
		>
			<Picture
				{...imageProps}
				ref={imgRef}
				// ref={(el) => {
				// 	imgRef = el;
				// 	props.ref?.(el);
				// }}
			/>
			<Show when={isLoading()}>
				<div class="animate-[fade-in_.3s_forwards_.5s] opacity-0 flex-center fixed inset-0 z-[999999] size-full bg-black/40">
					<span class="loading loading-ring w-12" />
				</div>
			</Show>
		</button>
	);
}
