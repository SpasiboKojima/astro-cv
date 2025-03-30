import { createSignal, For, onMount, Show, type JSX, type JSXElement } from 'solid-js';
import type { ImageOpts } from '~/lib/image';

function isImageMetadata(src: string | ImageMetadata): src is ImageMetadata {
	return (src as ImageMetadata).src !== undefined;
}

interface PictureProps extends JSX.ImgHTMLAttributes<HTMLImageElement> {
	options: ImageOpts;
}

const Picture = (props: PictureProps) => {
	const options = () => props.options;

	const src = options().rawOptions.src;
	return (
		<picture>
			<For each={options().options} fallback={null}>
				{(item, index) => <source sizes={props.sizes} srcset={options().srcSet[index()].attribute} type={`image/${item.format}`} />}
			</For>
			<img {...props} alt={props.alt} src={isImageMetadata(src) ? src.src : src} />
		</picture>
	);
};

interface ProjectImagesProps {
	images: ImageOpts[];
	children?: JSXElement;
}

export default function ProjectImages(props: ProjectImagesProps) {
	let modalRef: HTMLDialogElement | undefined;
	const [selectedIndex, setSelectedImage] = createSignal<number | null>(null);

	const selectedImage = () => props.images[selectedIndex() || 0];

	onMount(() => {
		window.addEventListener('keydown', close);
	});

	function close(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			const index = selectedIndex();
			if (modalRef?.open && index !== null && index < props.images.length - 1) {
				setSelectedImage(index + 1);
			}
		}
		if (e.key === 'ArrowLeft') {
			const index = selectedIndex();
			if (modalRef?.open && index !== null && index > 0) {
				setSelectedImage(index - 1);
			}
		}
	}

	const selectImage = (index: number) => {
		setSelectedImage(index);
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
				<div class="modal-box w-auto max-w-full p-0 md:max-w-10/12">
					<Show when={selectedImage()} fallback={<div>Loading...</div>}>
						{(item) => (
							<Picture
								options={{
									...item(),
									srcSet: item().src.map((src) => ({
										attribute: src,
										values: [],
									})),
								}}
								sizes="auto"
								alt="Project's UI mockup"
								class="size-full max-h-screen object-contain"
							/>
						)}
					</Show>
				</div>
				<form method="dialog" class="modal-backdrop z-0">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
}
