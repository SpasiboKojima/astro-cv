import type { ImageMetadata } from 'astro';
import CreativeITImg from '~/assets/images/employers/creativeit.jpeg';
import EPAMImg from '~/assets/images/employers/epam.png';
import TargsoftImg from '~/assets/images/employers/targsoft.jpeg';
import TotleImg from '~/assets/images/employers/totle.png';
import WebsecretImg from '~/assets/images/employers/websecret.jpeg';

export const location = 'Vilnius, Lithuania';
export const shortDescription = `I am a software engineer with 7 years of commercial experience. Through my career I contributed to more than 15 commercial projects. This includes both projects where I was working as a part of a frontend team and projects which I setup and maintained on my own.
Experienced in diverse web projects, I deliver effective frontend solutions with a strong focus on product development and the end user.`;
export const description = `${shortDescription}

In development I prioritize lightweight, high-performance, and extensible solutions. I have also adopted AI, I use the Windsurf extension for both code completion and chat to enhance productivity in some tasks. I don't mind digging someone else's code and enjoy refactoring and optimizing if there's a chance.
`;
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
		title: 'Special Features',
		skills: ['Tiptap', 'React Three Fiber', 'Wagmi', 'Viem (Ethers, Web3.js)'],
	},
];

export interface Job {
	title: string;
	employeeImg?: ImageMetadata;
	employeeElement?: boolean;
	employerName: string;
	period: string;
	description: string;
	shortDescription?: string;
	isUniversity?: boolean;
}

export const jobs: Job[] = [
	{
		title: 'Frontend Web Developer',
		employeeImg: EPAMImg,
		employerName: 'EPAM',
		period: 'Jan 2025 - Present',
		description: 'Working on migrating a set of websites for a big enterprise client to Next.js.',
		shortDescription: 'Working on migrating a set of websites for a big enterprise client to Next.js.',
	},
	{
		title: 'Frontend Web Developer',
		employeeImg: CreativeITImg,
		employerName: 'CreativeIT',
		period: 'Sep 2021 - Nov 2024',
		description: `Used React and Next.js on a total of 8 projects.
- Small Next.js + Tailwind project with integration of 3rd party API;
- Created MVP of a blockchain project in a month and used various optimization tools (Next.js’ SSG, Lazy Loading, caching) later during support;
- Refactored, polished, and updated a middle-sized project to noticeably improve performance, UX, and code quality. Added various major features and pages to it;
- Maintained and implemented better tech stack for a DEX Trading kit and it's introduction static website, adding new features and improving performance.
- Created 3D animation preview component with UX of controls in mind (mobile touch controls, on-screen controls, mouse + keyboard controls); Created a separate service to prerender animation files into .webm videos using Puppeteer;
- Created a multistep product purchase app with lots of customization options for vendors, authentication, internationalization, and multiple payment providers.
- Created an admin panel for a Healthcare project with various forms and settings, a rich-text editor, and a patient upload workflow.

Also:
- Participated in mentoring to speed up the unboarding process of less experienced developer;
- Participated in conducting technical interviews.`,
		shortDescription: 'Created in total 8 projects with React and Next.js. Participated in mentoring and conducting technical interviews.',
	},
	{
		title: 'Frontend Web Developer',
		employeeImg: TargsoftImg,
		employerName: 'TargSoft',
		period: 'Jul 2020 - Aug 2021',
		description: ` - Created 2 Canva editing extensions (Javascript);
- Worked on refactoring and optimizing a React frontend for a small startup;
- Worked on TargControl time tracking platform (Angular 11 & Typescript).`,
		shortDescription:
			'Created 2 Canva editing extensions. Worked on refactoring and optimizing a React frontend. Worked on TargControl time tracking platform.',
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
		shortDescription:
			'Created a new lightweight front-end app with React + Redux. Integrated our back-end service with various wallets. Created backoffice-related services.',
	},
	{
		title: 'Ethereum Developer',
		employeeImg: WebsecretImg,
		employerName: 'WEB Secret',
		period: 'Oct 2018 - Nov 2018',
		description:
			'Built a POC DAO DApps on Ethereum (smart-contracts), React.js + web3.js and added test coverage on JavaScript with Mocha + Chai.',
		shortDescription:
			'Built a POC DAO DApps on Ethereum (smart-contracts), React.js + web3.js and added test coverage on JavaScript with Mocha + Chai.',
	},
	{
		title: 'Ethereum Developer',
		employerName: 'TechBüro',
		period: 'Jan 2018 - Oct 2018',
		description: `Used Ethereum stack technologies (Solidity, Truffle, web3.js, Geth, OpenZeppelin) as well as API building and communitating with Ethereum on both backend and frontend sides (Go, Node.js, React.js), conducted R&D about implementing new solutions to our needs (Loom, zk-SNARKs).
- Created a set of smart-contracts for 2 internal projects,  which included working with security tokens (ERC1404) and expanding ideas of STO to our needs. Integrated smart-contracts interactions with Web3.js to AngularJs Front-end.
- Created a prototype of prediction market platform based on Gnosis. The dApp would allow users to make predictions and back them up by tokens. From my side was issued a research on topic of Futarchy, prediction markets, project Gnosis and its competitors, and created a basic version of front-end interacting with IPFS and Gnosis’s smart-contracts.`,
		shortDescription:
			'Created smart-contracts for 2 internal projects. Created multiple POC prototype apps. Integrated communications with Ethereum on both backend and frontend sides.',
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
];

export interface Project {
	title: string;
	employerName: string;
	period: string;
	description: string;
	skills: string[];
	slug?: string;
	url?: string;
	color?: `oklch(${string})`;
}

export const projects: Project[] = [
	{
		title: 'Set of brand websites',
		employerName: 'EPAM',
		period: 'Jan 2025 - Present',
		description: 'Working on migrating a set of websites for a big enterprise client to Next.js.',
		skills: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui'],
	},
	{
		title: 'Goldie Dashboard',
		employerName: 'CreativeIT',
		period: 'Jun 2024 - Sep 2024',
		description: '',
		skills: ['React', 'Zustand', 'React Hook Form', 'Redux', 'Tailwind CSS', 'DaisyUI', 'Tiptap'],
	},
	{
		title: 'INFINITY Webshop',
		employerName: 'CreativeIT',
		period: 'Nov 2023 - Jun 2024',
		description: `Academy and community platform that offers courses and information about personal wealth and investments in the integrated platform. Topic covered include health, forex trading, crypto, business, travel, networking. The new flow would offer users to assemble a personalized plan with content and accesses they need.

My accomplishments:
					- Implemented fully fledged Auth flow with credentials and custom backend using NextAuth
					- Implemented internationalization in Next.js middleware using next-intl
					- Implemented smoothly animated, responsive, and accessible interface efficiently optimized and near pixel-perfect to designs
					- Created a purchase page with server-side data fetching, validations, progress synchronization, and lots of customization options for vendors.`,
		skills: ['Next.js', 'React', 'NextAuth', 'Next-intl', 'React Hook Form', 'Tailwind CSS', 'DaisyUI', 'Zustand', 'framer-motion'],
		slug: 'infinity',
		color: 'oklch(0.63 0.17 249.61)',
	},
	{
		title: 'Mocaptrade',
		employerName: 'CreativeIT',
		period: 'Aug 2023 - Nov 2023',
		description: `Marketplace offering pre-recorded motion capture data that can be applied to any 3D character or model. You can preview the animation file in detail before purchasing it in an interactive player, with controls allowing you to inspect it from every angle, frame by frame.

My accomplishments:
				- Created animation preview component with UX of controls in mind (mobile touch controls, on-screen controls, mouse + keyboard controls)
				- Created a separate service to prerender animation files into .webm videos using Puppeteer.`,
		skills: ['Next.js', 'React', 'Three.js (@react-three/fiber, @react-three/drei)', 'Zustand', 'Tailwind CSS', 'Puppeteer'],
		slug: 'marketplace',
		color: 'oklch(0.52 0.24 275.78)',
		url: 'https://mocaptrade.com/',
	},
	{
		title: 'D8X Website',
		employerName: 'CreativeIT',
		period: 'Sep 2023 - Oct 2023',
		description: '',
		skills: ['React', 'Tailwind CSS', 'SCSS', 'DaisyUI'],
		url: 'https://d8x.exchange/',
	},
	{
		title: 'D8X Trading Kit',
		employerName: 'CreativeIT',
		period: 'Aug 2023 - Sep 2023',
		description: '',
		skills: ['Next.js', 'React', 'Wagmi', 'Viem', 'SCSS', 'MUI', 'react-i18next', 'Jotai'],
		url: 'https://github.com/D8-X/d8x-trader-frontend-lite',
	},
	{
		title: 'Diatomix',
		employerName: 'CreativeIT',
		period: 'Aug 2023 - Sep 2023',
		description: '',
		skills: ['Next.js', 'React', 'Wagmi', 'Viem', 'SCSS', 'MUI', 'Jotai'],
	},
	{
		title: 'Starly',
		employerName: 'CreativeIT',
		period: 'Dec 2021 - May 2023',
		description: `Launchpad and marketplace for gamified NFT collections with various collect-to-earn mechanics. Features include marketplace, collector's score ranking, staking, vesting, bidding, and more. Aimed to make the NFT creating, selling, and collecting as simple as possible, it offers the ultimate experience to creators and their fans. Offers platform's own native utility token $STARLY, which can be used to participate in new drops, get missing NFTs, stake them to increase your NFT reward claim rate & earn 15% APY.
		Created by an experienced team who previously founded social networks F3 with 30+ million users and Ask.fm with 150+ million users.
		Trusted by Dapper Labs. Built on the FLOW blockchain.

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
		color: 'oklch(0.57 0.27 295.45)',
		url: 'https://starly.io/',
	},
	{
		title: 'Bored & Lucky',
		employerName: 'CreativeIT',
		period: 'Jul 2022 - Dec 2022',
		description: `‘Bored & Lucky’ is an Ethereum smart-contract based NFT raffle platform. All raffles are smart contract based - 100% fair, transparent & audited by QuillAudits. To guarantee transparency and unbiased approach the winner is determined via transaction on blockchain using Chainlink VRF to independently generate a random number to draw the winner.

				My accomplishments:
				- All front-end parts except for project setup and initial raffle layout;
				- Implemented UI near pixel-perfect to designs and ensured its UX and responsiveness with the help of the QA team;
				- Implemented Web3 related logic of displaying time-based raffles and interacting with them with Web3 wallets;
				- Created a small custom global store solution using React Context and Redux Thunk with persistence.`,
		skills: ['Next.js', 'Typescript', 'Redux Thunk', 'Styled-components', 'Redis', 'Wagmi'],
		slug: 'bored&lucky',
		url: 'https://boredlucky.vercel.app/',
		color: 'oklch(0.82 0.16 88.46)',
	},
	{
		title: 'SwiftLoan',
		employerName: 'CreativeIT',
		period: 'Oct 2021 - Dec 2021',
		description: '',
		skills: ['Next.js', 'React', 'Tailwind CSS'],
		url: 'https://swift.loan/',
	},
	{
		title: 'TargControl',
		employerName: 'TargSoft',
		period: 'Mar 2021 - May 2021',
		description: '',
		skills: ['Angular'],
		url: 'https://targcontrol.com/',
	},
	{
		title: 'Notata',
		employerName: 'TargSoft',
		period: 'Feb 2021 - May 2021',
		description: `My accomplishments:
			- Refactoring
			- Optimizations
			- Additional pages and components`,
		skills: ['React', 'Redux', 'Typescript', 'GraphQL', 'AWS Amplify', 'AWS AppSync'],
		url: 'https://site.notata.io/',
	},
	{
		title: '2 Canva Frames Extensions',
		employerName: 'TargSoft',
		period: 'Jul 2020 - Dec 2020',
		description: '',
		skills: ['JavaScript'],
	},
	{
		title: 'Totle Backoffice',
		employerName: 'Totle',
		period: 'Mar 2020 - Jun 2020',
		description: '',
		skills: ['React', 'Redux', 'Typescript', 'GraphQL', 'Web3.js'],
	},
	{
		title: 'Totle Swap',
		employerName: 'Totle',
		period: 'May 2019 - Mar 2020',
		description: `Ethereum-based decentralized exchange aggregator that lets you swap tokens at best prices available. Utilizing smart order-routing technology, Totle Swap looks at all the swap rates across many DEX, gives you a list of the best rates available, and facilitates the swap through the DEX or multiple DEX if needed.
		Was integrated later as one of the routes for Metamask.

My accomplishments:
- Setup a new lightweight front-end app with React + Redux that handled API calls and Web3 wallets interactions;
- Integrated our back-end service with various wallets (i.e. MyEtherWallet);
- Created backoffice-related services: a web app to manage back-end data (built with React + Typescript + GraphQL), notifications and logging services (Node.js + Typescript);`,
		skills: ['React', 'Redux', 'Typescript', 'GraphQL', 'Flexbox Grid', 'Web3.js'],
		slug: 'totle',
		color: 'oklch(0.65 0.16 244.05)',
	},
	{
		title: 'TombCare',
		employerName: 'TechBüro',
		period: 'May 2018 - Jul 2018',
		description: '',
		skills: ['Solidity', 'Truffle', 'Web3.js'],
	},
	{
		title: 'Gnosis Prediction Market',
		employerName: 'TechBüro',
		period: 'Apr 2018 - May 2018',
		description: '',
		skills: ['Node.js', 'React', 'Solidity', 'Truffle', 'Web3.js'],
	},
	{
		title: 'Mineority',
		employerName: 'TechBüro',
		period: 'Mar 2018 - May 2018',
		description: '',
		skills: ['Node.js', 'React', 'Solidity', 'Truffle', 'Web3.js'],
	},
];

interface Article {
	title: string;
	slug: string;
}

export const articles: Article[] = [
	{
		title: '7 Easy UX Improvements for your Webapp',
		slug: 'https://dev.to/thanksboss/7-easy-ux-improvements-for-your-webapp-4mia',
	},
	{
		title: 'Anticipating User Errors in Web',
		slug: 'https://dev.to/thanksboss/anticipating-user-errors-in-web-3nbc',
	},
	{
		title: 'Fixing Target Size or A Fat Finger Problem',
		slug: 'https://dev.to/thanksboss/fixing-target-area-or-a-fat-finger-problem-1fe8',
	},
];
