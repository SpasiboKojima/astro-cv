import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export interface ImageOpts {
	// biome-ignore lint/suspicious/noExplicitAny: Kinda unknown
	attributes: Record<string, any>;
	origSrc: GetImageResult['rawOptions']['src'];
	src: string[];
	srcSet: Partial<ImageMetadata>[];
}

type ImageImport = () => Promise<{
	default: ImageMetadata;
}>;

const generateImageVariants = async (image: ImageImport) => {
	const imageMetadata = (await image()).default;

	const avif = await getImage({ src: imageMetadata, format: 'avif', widths: [Math.round(imageMetadata.width / 2), imageMetadata.width] });
	const webp = await getImage({ src: imageMetadata, format: 'webp', widths: [Math.round(imageMetadata.width / 2), imageMetadata.width] });

	return {
		attributes: avif.attributes,
		origSrc: avif.rawOptions.src,
		src: [avif.src, webp.src],
		srcSet: [
			{
				format: 'avif',
				src: avif.srcSet.attribute,
			},
			{
				format: 'webp',
				src: webp.srcSet.attribute,
			},
		],
	} satisfies ImageOpts;
};

export const generateImages = async (imports: ImageImport[]) => Promise.all(imports.map((image) => generateImageVariants(image)));
