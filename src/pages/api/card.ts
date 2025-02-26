import { ImageResponse } from '@vercel/og';
import { location } from '~/data';
import companyLogo from '~/assets/images/employers/creativeit.jpeg';

export const runtime = 'edge';

const getUrl = () => {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:4321';
	}
	return `https://${process.env.VERCEL_URL}`;
};

const font = fetch(`${getUrl()}/assets/fonts/Geist/Geist-Regular.otf`).then((res) => res.arrayBuffer());

export async function GET() {
	console.log('getUrl() :>> ', getUrl());
	const fontData = await font;

	return new ImageResponse(
		{
			type: 'div',
			props: {
				style: {
					lineHeight: 1.125,
					letterSpacing: -1,
					fontFamily: 'Geist',
					fontSize: 32,
					fontWeight: 600,
					backgroundImage:
						'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
					backgroundSize: '100px 100px',
				},
				tw: 'flex h-full w-full flex-col items-center justify-center bg-gray-50 p-16 text-center text-gray-900',
				children: [
					{
						type: 'img',
						props: {
							src: `${getUrl()}/assets/creativeit.jpeg`,
							width: companyLogo.width,
							height: companyLogo.height,
							tw: 'w-24 h-24 mt-auto',
						},
					},
					{
						type: 'div',
						props: {
							tw: 'mt-8 text-5xl',
							children: 'Andrew Katsewich',
						},
					},
					{
						type: 'div',
						props: {
							tw: 'mb-auto mt-2 text-3xl text-gray-600',
							children: 'Full Stack Developer',
						},
					},
					{
						type: 'div',
						props: {
							tw: 'flex w-full items-center justify-between',
							children: [
								{
									type: 'div',
									props: {
										children: 'CreativeIT',
									},
								},
								{
									type: 'div',
									props: {
										children: location,
									},
								},
							],
						},
					},
				],
			},
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Geist',
					data: fontData,
					weight: 400,
					style: 'normal',
				},
			],
		}
	);
}
