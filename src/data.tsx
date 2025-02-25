import type { ImageMetadata } from 'astro';
import CreativeITImg from '~/assets/images/employers/creativeit.jpeg';
import TargsoftImg from '~/assets/images/employers/targsoft.jpeg';
import TotleImg from '~/assets/images/employers/totle.png';
import WebsecretImg from '~/assets/images/employers/websecret.jpeg';

export const location = 'Vilnius, Lithuania';
export const shortDescription = `I am a software engineer from ${location} with 6 years of commercial experience. I specialize in full-stack development using React, Typescript, Next.js, and Node.js. ${'\n'}I take responsibility for product development and think about end-users.`;
export const skillsPrimary = ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SolidJS', 'Wagmi', 'Ethers'];
export const languages = ['English (C1)', 'Japanese (N1)', 'Russian (Native)', 'Belarusian (Native)'];

export const skills = [
	{
		title: 'Front-end',
		skills: [
			'React',
			'Next.js',
			'TypeScript',
			'JavaScript',
			'Zustand',
			'Redux',
			'Tailwind CSS',
			'DaisyUI',
			'Styled-components',
			'GraphQL',
			'SolidJS',
			'Astro',
		],
	},
	{
		title: 'DevOps tools',
		skills: ['Docker', 'AWS (EC2, RDS, API Gateway, Lambda, DynamoDB, SQS, CloudFront)'],
	},
	{
		title: 'Back-end',
		skills: ['Node.js', 'Express', 'Firebase'],
	},
	{
		title: 'Databases',
		skills: ['PostgreSQL', 'MySQL'],
	},
	{
		title: 'Blockchain development',
		skills: ['Wagmi', 'Viem (Ethers, Web3.js)', 'Solidity', 'Truffle Framework'],
	},
	{
		title: 'Special Features',
		skills: ['Tiptap', 'React Three Fiber'],
	},
];

export interface Job {
	title: string;
	employeeImg?: ImageMetadata;
	employeeElement?: boolean;
	employerName: string;
	period: string;
	description: string;
	isUniversity?: boolean;
}

export const jobs: Job[] = [
	{
		title: 'Frontend Web Developer',
		employeeImg: CreativeITImg,
		employerName: 'EPAM',
		period: 'Jan 2025 - Present',
		description: '',
	},
	{
		title: 'Frontend Web Developer',
		employeeImg: CreativeITImg,
		employerName: 'CreativeIT',
		period: 'Sep 2021 - Nov 2024',
		description: `Used React and Next.js on a total of 7 projects.
- Small Next.js + Tailwind project with integration of 3rd party API;
- Created MVP of a blockchain project in a month and used various optimization tools (Next.js’ SSG, Lazy Loading, caching) later during support;
- Refactored, polished, and updated a middle-sized project to noticeably improve performance, UX, and code quality. Added various major features and pages to it;
- Created 3D animation preview component with UX of controls in mind (mobile touch controls, on-screen controls, mouse + keyboard controls); Created a separate service to prerender animation files into .webm videos using Puppeteer;
- Created a multistep product purchase app with lots of customization options for vendors, authentication, internationalization, and multiple payment providers.
- Created an admin panel for a Healthcare project with various forms and settings, a rich-text editor, and a patient upload workflow.

Also:
- Participated in mentoring to speed up the unboarding process of less experienced developer;
- Participated in conducting technical interviews.`,
	},
	{
		title: 'Frontend Web Developer',
		employeeImg: TargsoftImg,
		employerName: 'TargSoft',
		period: 'Jul 2020 - Aug 2021',
		description: ` - Created 2 Canva editing extensions (Javascript);
- Worked on refactoring and optimizing a React frontend for a small startup;
- Worked on TargControl time tracking platform (Angular 11 & Typescript).`,
	},
	{
		title: 'Frontend Web Developer',
		employeeImg: TotleImg,
		employerName: 'Totle',
		period: 'May 2019 - Jun 2020',
		description: `Decentralized exchanges aggregator that lets you swap tokens at best prices available.

My accomplishments:
- Setup a new lightweight front-end app with React + Redux that handled API calls and Web3 wallets interactions;
- Integrated our back-end service with various wallets (i.e. MyEtherWallet);
- Created backoffice-related services: a web app to manage back-end data (built with React + Typescript + GraphQL), notifications and logging services (Node.js + Typescript);

Was integrated later as one of the routes for Metamask.`,
	},
	{
		title: 'Ethereum Developer',
		employeeImg: WebsecretImg,
		employerName: 'WEB Secret',
		period: 'Oct 2018 - Nov 2018',
		description:
			'Built a POC DAO DApps on Ethereum (smart-contracts), React.js + web3.js and added test coverage on JavaScript with Mocha + Chai.',
	},
	{
		title: 'Ethereum Developer',
		employerName: 'TechBüro',
		period: 'Jan 2018 - Oct 2018',
		description: `Used Ethereum stack technologies (Solidity, Truffle, web3.js, Geth, OpenZeppelin) as well as API building and communitating with Ethereum on both backend and frontend sides (Go, Node.js, React.js), conducted R&D about implementing new solutions to our needs (Loom, zk-SNARKs).
- Created a set of smart-contracts for 2 internal projects,  which included working with security tokens (ERC1404) and expanding ideas of STO to our needs. Integrated smart-contracts interactions with Web3.js to AngularJs Front-end.
- Created a prototype of prediction market platform based on Gnosis. The dApp would allow users to make predictions and back them up by tokens. From my side was issued a research on topic of Futarchy, prediction markets, project Gnosis and its competitors, and created a basic version of front-end interacting with IPFS and Gnosis’s smart-contracts.`,
	},
];

export const education: Job[] = [
	{
		title: 'Bachelor of Computer Science',
		employerName: "Bachelor's degree, Informational Systems and Technologies",
		period: '2015 - 2019',
		description:
			"Here I got fundamental knowledge of Relational databases (Oracle, Microsoft SQL), OOP languages (C++, C#, Java), computer networks, distributed systems, information security. Thanks to this, I've had my push towards learning deeply and enjoying this industry.",
	},
];

interface Course {
	title: string;
	url: string;
	icon: string;
}

export const courses: Course[] = [
	{
		title: 'Udemy - React 18 Tutorial and Projects Course (2023)',
		url: 'https://www.udemy.com/certificate/UC-aad01ec0-c5b1-4b5e-85ed-a46d7e5b7beb/',
		icon: 'courses/react',
	},
	{
		title: "Udemy - Microfrontends with React: A Complete Developer's Guide",
		url: 'https://www.udemy.com/certificate/UC-57d1fc52-921a-4476-9892-2c785fdd7741/',
		icon: 'courses/react',
	},
	{
		title: 'Udemy - AWS Serverless APIs & Apps - A Complete Introduction',
		url: 'https://www.udemy.com/certificate/UC-95dc5377-2bf6-480a-a364-d5eef23e4e23/',
		icon: 'courses/database',
	},
	{
		title: 'Udemy - Serverless Framework Bootcamp: Node.js, AWS & Microservices',
		url: 'https://www.udemy.com/certificate/UC-33886559-10e3-4aca-a032-2dd8f670480d/',
		icon: 'courses/database',
	},
	{
		title: "Udemy - Ethereum and Solidity: The Complete Developer's Guide",
		url: 'https://www.udemy.com/certificate/UC-WJRO97KJ/',
		icon: 'courses/ethereum',
	},
];

interface Project {
	title: string;
	employerName: string;
	period: string;
	description: string;
	skills: string[];
	slug: string;
}

export const projects: Project[] = [
	{
		title: 'INFINITY Webshop',
		employerName: 'CreativeIT',
		period: 'Nov 2023 - Jun 2024',
		description: `My accomplishments:
					- Implemented fully fledged Auth flow with credentials and custom backend using NextAuth
					- Implemented internationalization in Next.js middleware using next-intl
					- Implemented smoothly animated, responsive, and accessible interface efficiently optimized and near pixel-perfect to designs using Tailwind CSS, DaisyUI and framer-motion
					- Created a purchase page with server-side data fetching, validations, progress synchronization, and lots of customization options for vendors.`,
		skills: ['Next.js', 'React', 'NextAuth', 'Next-intl', 'React Hook Form', 'Tailwind CSS', 'DaisyUI', 'Zustand'],
		slug: 'infinity',
	},
	{
		title: '3D Animation Marketplace',
		employerName: 'CreativeIT',
		period: 'Aug 2023 - Nov 2023',
		description: `Created animation preview component with UX of controls in mind (mobile touch controls, on-screen controls, mouse + keyboard controls)
				Created a separate service to prerender animation files into .webm videos using Puppeteer.`,
		skills: ['Next.js', 'React', 'Three.js (@react-three/fiber, @react-three/drei)', 'Zustand', 'Tailwind CSS', 'Puppeteer'],
		slug: 'marketplace',
	},
	{
		title: 'Starly',
		employerName: 'CreativeIT',
		period: 'Dec 2021 - May 2023',
		description: `NFT marketplace with various collect-to-earn mechanics. Built on React, Redux, Styled-components, Firebase, Flow blockchain, and Ethers.
				My accomplishments:
				- Optimized, refactored, and improved an already existing code base of a middle-sized project, which greatly improved performance, UX and code quality (-40% bundle size, resolved hundreds of eslint and typescript errors, and fixed dozens of old bugs);
				- Implemented NFT and Starly token staking functionalities, bidding, vesting, and Binance smart chain payment integration;
				- Implemented UI for the new pages near pixel-perfect to designs and ensured its UX and responsibility with the help of the QA team.
				
				Client’s feedback on my work: https://clutch.co/go-to-review/be30a22b-bf5a-4b72-be7b-9232c314eaa3/190900`,
		skills: [
			'React',
			'Redux (with Saga and Toolkit)',
			'Styled-components',
			'Storybook',
			'Typescript',
			'react-hook-forms',
			'Firebase',
			'Flow blockchain',
			'Ethers',
		],
		slug: 'starly',
	},
	// {/* https://boredlucky.vercel.app/ */}
	{
		title: 'Bored & Lucky',
		employerName: 'CreativeIT',
		period: 'Jul 2022 - Dec 2022',
		description: `‘Bored & Lucky’ is and Ethereum smart-contract based NFT raffle platform. Built on Next.js, Typescript, Redux Thunk, Styled-components, Redis, Wagmi.
				My responsibilities and accomplishments were all front-end parts except for project setup and initial raffle layout, i.e.:
				- Implemented UI near pixel-perfect to designs and ensured its UX and responsiveness with the help of the QA team;
				- Implemented Web3 related logic of displaying time-based raffles and interacting with them with Web3 wallets;
				- Created a small custom global store solution using React Context and Redux Thunk with persistence.`,
		skills: ['Next.js', 'Typescript', 'Redux Thunk', 'Styled-components', 'Redis', 'Wagmi'],
		slug: 'bored&lucky',
	},
	{
		title: 'Totle Swap',
		employerName: 'Totle',
		period: 'May 2019 - Mar 2020',
		description: `Decentralized exchanges aggregator that lets you swap tokens at best prices available.,

My accomplishments:
- Setup a new lightweight front-end app with React + Redux that handled API calls and Web3 wallets interactions;
- Integrated our back-end service with various wallets (i.e. MyEtherWallet);
- Created backoffice-related services: a web app to manage back-end data (built with React + Typescript + GraphQL), notifications and logging services (Node.js + Typescript);

Was integrated later as one of the routes for Metamask.`,
		skills: ['React', 'Redux', 'Typescript', 'GraphQL', 'Flexbox Grid'],
		slug: 'totle',
	},
];
