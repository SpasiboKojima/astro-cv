import { createSignal, For, onCleanup, onMount, type JSXElement } from 'solid-js';
import { testImgLoaded, type ImageOpts } from '~/lib/image';
import { getZoom, ImageZoom } from './ImageZoom';
import LoadingSpinner from './LoadingSpinner';

interface ProjectImagesProps {
	images: ImageOpts[];
	children?: JSXElement;
}

export default function ProjectImages(props: ProjectImagesProps) {
	const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null);
	const [isLoading, setIsLoading] = createSignal(false);

	const imgRefs: (HTMLImageElement | undefined)[] = [];

	onMount(() => {
		const zoom = getZoom();
		if (!zoom) return;

		if (imgRefs) {
			zoom.attach(imgRefs.filter((el) => el !== undefined) as HTMLElement[]);
		} else {
			zoom.detach();
		}

		document.addEventListener('keydown', changeImage);
	});

	onCleanup(() => {
		document.removeEventListener('keydown', changeImage);
	});

	const preloadImage = (imgRef: HTMLImageElement, setIsLoading: (value: boolean) => void, index: number) => {
		// Hacky way to grab the original image source of the same extension that was chosen be the browser for the preview
		const hdSource = props.images[index].src[imgRef.currentSrc.endsWith('avif') ? 0 : 1];

		setIsLoading(true);

		const image = new Image();
		image.src = hdSource;

		return new Promise<void>((resolve) => {
			const onLoad = () => {
				setIsLoading(false);

				imgRef?.setAttribute('data-zoom-src', hdSource);

				resolve();
			};

			image
				.decode()
				.then(onLoad)
				.catch(() => {
					if (testImgLoaded(image)) {
						onLoad();
						return;
					}
					image.onload = onLoad;
				});
		});
	};

	const updateImage = async (setIsLoading: (value: boolean) => void, index: number) => {
		setSelectedIndex(index);
		const imgRef = imgRefs[index];
		if (!imgRef) return;
		await preloadImage(imgRef, setIsLoading, index);
		getZoom().change({ target: imgRef });
	};

	function changeImage(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			const index = selectedIndex();
			if (index !== null && index < props.images.length - 1) {
				updateImage(setIsLoading, index + 1);
			}
		}
		if (e.key === 'ArrowLeft') {
			const index = selectedIndex();
			if (index !== null && index > 0) {
				updateImage(setIsLoading, index - 1);
			}
		}
	}

	const onClickHandler = async (e: MouseEvent, setIsLoading: (value: boolean) => void, index: number) => {
		e.stopPropagation();

		setSelectedIndex(index);
		const imgRef = imgRefs[index];

		if (!imgRef) return;

		await preloadImage(imgRef, setIsLoading, index);
		getZoom().open({ target: imgRef });
	};

	return (
		<>
			<div class="grid gap-4 md:grid-cols-2">
				<For each={props.images} fallback={<div>Loading...</div>}>
					{(item, index) => (
						<ImageZoom
							aria-label={`Open image ${index() + 1} fullscreen`}
							class="scale-100 cursor-zoom-in self-center overflow-hidden rounded-xl border border-gray-200 shadow transition-transform duration-300 ease-in-out hover:scale-106 focus:scale-106"
							onClick={(e, setIsLoading) => onClickHandler(e, setIsLoading, index())}
							ref={(el) => {
								imgRefs[index()] = el;
							}}
							options={item}
							alt="Project's UI mockup"
							width={item.attributes.width}
							height={item.attributes.height}
							decoding={item.attributes.decoding}
							loading={index() === 0 ? 'eager' : item.attributes.loading}
							sizes="(max-width: 48rem) 100vw, 21.25rem"
						/>
					)}
				</For>
			</div>

			<LoadingSpinner isLoading={isLoading} />
		</>
	);
}
