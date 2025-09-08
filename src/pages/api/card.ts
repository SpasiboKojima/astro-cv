import { ImageResponse } from '@vercel/og';
import { jobs, location, position } from '~/data';

const getUrl = () => {
	if (process.env.NODE_ENV === 'development') {
		return 'http://localhost:4321';
	}
	return `https://${process.env.VERCEL_URL}`;
};

const font = fetch(`${getUrl()}/assets/fonts/Geist/Geist-Regular.otf`);

export async function GET() {
	let fontData: ArrayBuffer | null = null;
	try {
		fontData = await (await font).arrayBuffer();
	} catch (err) {
		console.log('err :>> ', err, fontData);
	}

	return new ImageResponse(
		{
			type: 'div',
			key: 'root',
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
							src: `${getUrl()}/assets/coherent.png`,
							width: 160,
							height: 160,
							tw: 'mt-auto',
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
							tw: 'mb-auto mt-2 text-3xl text-gray-700',
							children: position,
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
										children: jobs[0].employerName,
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
			// fonts: fontData
			// 	? [
			// 			{
			// 				name: 'Geist',
			// 				data: fontData,
			// 				weight: 400,
			// 				style: 'normal',
			// 			},
			// 		]
			// 	: [],
		}
	);
}
