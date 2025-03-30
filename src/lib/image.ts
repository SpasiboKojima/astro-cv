import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export interface ImageOpts extends Omit<GetImageResult, 'src' | 'srcSet' | 'options'> {
	src: string[];
	srcSet: GetImageResult['srcSet'][];
	options: GetImageResult['options'][];
}

type ImageImport = () => Promise<{
	default: ImageMetadata;
}>;

const getPictures = async (image: ImageImport) => {
	const imageMetadata = (await image()).default;

	const avif = await getImage({ src: imageMetadata, format: 'avif', widths: [imageMetadata.width / 2, imageMetadata.width] });
	const webp = await getImage({ src: imageMetadata, format: 'webp', widths: [imageMetadata.width / 2, imageMetadata.width] });

	return {
		...avif,
		src: [avif.src, webp.src],
		srcSet: [avif.srcSet, webp.srcSet],
		options: [avif.options, webp.options],
	} satisfies ImageOpts;
};

export const generateImages = async (imports: ImageImport[]) => Promise.all(imports.map((image) => getPictures(image)));
