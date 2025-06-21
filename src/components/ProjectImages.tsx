import { createSignal, For, onMount, Show, type JSX, type JSXElement } from 'solid-js';
import type { ImageOpts } from '~/lib/image';

interface PictureProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
	options: ImageOpts;
}

const Picture = (props: PictureProps) => {
	const options = () => props.options;

	const getSrc = () => {
		const src = options().rawOptions.src;
		return typeof src === 'string' ? src : src.src;
	};

	return (
		<picture>
			<For each={options().options} fallback={null}>
				{(item, index) => <source sizes={props.sizes} srcset={options().srcSet[index()].attribute} type={`image/${item.format}`} />}
			</For>
			<img {...props} alt={props.alt} src={getSrc()} />
		</picture>
	);
};

interface PictureWithLoadingProps extends PictureProps {
	id: string;
}

const [loadedImageMap, setLoadedImageMap] = createSignal<Record<string, boolean>>({});

const PictureWithLoading = (props: PictureWithLoadingProps) => {
	const isLoaded = () => loadedImageMap()[props.id];

	return (
		<>
			<Picture {...props} onload={() => setLoadedImageMap({ ...loadedImageMap(), [props.id]: true })} />
			<Show when={!isLoaded()}>
				<div class="fixed inset-0 z-20 size-full animate-fade-in flex-center bg-black/40">
					<span class="loading loading-ring w-12" />
				</div>
			</Show>
		</>
	);
};

interface ProjectImagesProps {
	images: ImageOpts[];
	children?: JSXElement;
}

export default function ProjectImages(props: ProjectImagesProps) {
	let modalRef: HTMLDialogElement | undefined;
	const [selectedIndex, setSelectedIndex] = createSignal<number | null>(null);

	const selectedImage = () => {
		const index = selectedIndex();
		return index !== null ? props.images[index] : null;
	};

	onMount(() => {
		window.addEventListener('keydown', changeImage);
	});

	function changeImage(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			const index = selectedIndex();
			if (modalRef?.open && index !== null && index < props.images.length - 1) {
				setSelectedIndex(index + 1);
			}
		}
		if (e.key === 'ArrowLeft') {
			const index = selectedIndex();
			if (modalRef?.open && index !== null && index > 0) {
				setSelectedIndex(index - 1);
			}
		}
	}

	const selectImage = (index: number) => {
		setSelectedIndex(index);
		modalRef?.showModal();
	};

	return (
		<>
			<div class="grid gap-4 md:grid-cols-2">
				<For each={props.images} fallback={<div>Loading...</div>}>
					{(item, index) => (
						<div class="self-center overflow-hidden rounded-xl border border-gray-200 shadow">
							<Picture
								options={item}
								onClick={() => selectImage(index())}
								class="h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
								alt="Project's UI mockup"
								width={item.attributes.width}
								height={item.attributes.height}
								decoding={item.attributes.decoding}
								loading={index() === 0 ? 'eager' : item.attributes.loading}
								sizes="(max-width: 48rem) 100vw, 21.25rem"
							/>
						</div>
					)}
				</For>
			</div>

			<dialog class="modal" ref={modalRef}>
				<div class="modal-box w-auto max-w-full p-0 md:max-w-10/12 min-w-[80%]">
					<Show
						when={selectedImage()}
						fallback={
							<div class="size-full animate-fade-in flex-center">
								<span class="loading loading-ring w-12" />
							</div>
						}
					>
						{(item) => (
							<PictureWithLoading
								options={{
									...item(),
									srcSet: item().src.map((src) => ({
										attribute: src,
										values: [],
									})),
								}}
								id={selectedIndex()?.toString() ?? ''}
								width={item().attributes.width}
								height={item().attributes.height}
								alt="Project's UI mockup"
								class="size-full max-h-screen object-contain"
								onClick={() => modalRef?.close()}
							/>
						)}
					</Show>
				</div>
				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
}
