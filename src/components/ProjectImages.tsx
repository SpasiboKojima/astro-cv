import { createSignal, For, onMount, type JSXElement } from 'solid-js';
import type { ImageOpts } from '~/lib/image';
import { ImageZoom, setLoadedImages } from './ImageZoom';

// interface PictureProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
// 	options: ImageOpts;
// }

// const Picture = (props: PictureProps) => {
// 	const [localProps, imageProps] = splitProps(props, ['options', 'sizes']);
// 	const options = () => localProps.options;

// 	const getSrc = () => {
// 		const src = options().origSrc;
// 		return typeof src === 'string' ? src : src.src;
// 	};

// 	return (
// 		<picture>
// 			<For each={options().srcSet} fallback={null}>
// 				{(item) => <source sizes={localProps.sizes} srcset={item.src} type={`image/${item.format}`} />}
// 			</For>
// 			<img {...imageProps} alt={props.alt} src={getSrc()} />
// 		</picture>
// 	);
// };

// const [loadedImages, setLoadedImages] = createSignal<Record<string, boolean>>({});

// interface PictureWithLoadingProps extends PictureProps {
// 	id: string;
// }

// const PictureWithLoading = (props: PictureWithLoadingProps) => {
// 	const isLoaded = () => loadedImages()[props.id];

// 	return (
// 		<>
// 			<Picture {...props} onload={() => setLoadedImages({ ...loadedImages(), [props.id]: true })} />
// 			<Show when={!isLoaded()}>
// 				<div class="animate-fade-in flex-center fixed inset-0 z-20 size-full bg-black/40">
// 					<span class="loading loading-ring w-12" />
// 				</div>
// 			</Show>
// 		</>
// 	);
// };

interface ProjectImagesProps {
	images: ImageOpts[];
	children?: JSXElement;
}

export default function ProjectImages(props: ProjectImagesProps) {
	const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null);

	const imgRefs: (HTMLImageElement | undefined)[] = [];

	onMount(() => {
		setLoadedImages({});

		// const zoom = getZoom();
		// if (!zoom) return;

		// if (imgRefs) {
		// 	zoom.attach(imgRefs.filter((el) => el !== undefined) as HTMLElement[]);
		// } else {
		// 	zoom.detach();
		// }
	});

	// const selectedImage = () => {
	// 	const index = selectedIndex();
	// 	return index !== null ? props.images[index] : null;
	// };

	function changeImage(e: KeyboardEvent) {
		// const zoomRef = getZoom();
		// if (e.key === 'ArrowRight') {
		// 	const index = selectedIndex();
		// 	if (index !== null && index < props.images.length - 1) {
		// 		setSelectedIndex(index + 1);
		// 		zoomRef.close().then(() => {
		// 			zoomRef.open({ target: imgRefs[index + 1] });
		// 		});
		// 	}
		// }
		// if (e.key === 'ArrowLeft') {
		// 	const index = selectedIndex();
		// 	if (index !== null && index > 0) {
		// 		setSelectedIndex(index - 1);
		// 		zoomRef.close().then(() => {
		// 			zoomRef.open({ target: imgRefs[index - 1] });
		// 		});
		// 	}
		// }
	}

	// const selectImage = (index: number) => {
	// 	setSelectedIndex(index);
	// 	modalRef?.showModal();
	// };

	return (
		<>
			<div class="grid gap-4 md:grid-cols-2" onkeydown={changeImage}>
				<For each={props.images} fallback={<div>Loading...</div>}>
					{(item, index) => (
						<ImageZoom
							aria-label={`Open image ${index() + 1} fullscreen`}
							class="cursor-zoom-in scale-100 self-center overflow-hidden rounded-xl border border-gray-200 shadow focus:scale-106 hover:scale-106 transition-transform duration-300 ease-in-out"
							id={index().toString()}
							onClick={() => setSelectedIndex(index())}
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

						// {/* <Picture
						// 	options={item}
						// 	class="h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
						// 	alt="Project's UI mockup"
						// 	width={item.attributes.width}
						// 	height={item.attributes.height}
						// 	decoding={item.attributes.decoding}
						// 	loading={index() === 0 ? 'eager' : item.attributes.loading}
						// 	sizes="(max-width: 48rem) 100vw, 21.25rem"
						// /> */}
					)}
				</For>
			</div>

			{/* <dialog class="modal" ref={modalRef} onkeydown={changeImage}>
				<div class="modal-box w-auto max-w-full min-w-2/5 p-0 md:max-w-10/12">
					<Show
						when={selectedImage()}
						fallback={
							<div class="animate-fade-in flex-center size-full">
								<span class="loading loading-ring w-12" />
							</div>
						}
					>
						{(item) => (
							<PictureWithLoading
								options={{
									...item(),
									srcSet: item().src.map((src, index) => ({
										src: src,
										format: item().srcSet[index].format,
									})),
								}}
								id={selectedIndex()?.toString() ?? ''}
								width={item().attributes.width}
								height={item().attributes.height}
								alt="Project's UI mockup"
								class="size-full max-h-screen cursor-zoom-out object-contain"
								onClick={() => modalRef?.close()}
							/>
						)}
					</Show>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog> */}
		</>
	);
}
