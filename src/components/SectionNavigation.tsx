import { cva } from 'class-variance-authority';
import { createSignal, type JSX } from 'solid-js';

const [currentTab, setCurrentTab] = createSignal(0);

const button = cva('div', {
	variants: {
		intent: {
			primary: ['sticky z-10 w-full justify-between gap-2 bg-base-100 transition-colors duration-300 text-center'],
		},
	},
	defaultVariants: {
		intent: 'primary',
	},
});

const TabButton = ({ text, index }: { text: string; index: number }) => {
	return (
		<button
			class={`w-full border-t-2 p-2 font-semibold transition-all duration-200 ease-out lg:border-b-2 lg:border-t-0 lg:p-4 ${
				currentTab() === index
					? 'border-base-content text-base-content'
					: 'border-transparent text-base-content/60 hover:text-base-content/75'
			}`}
			onClick={() => setCurrentTab(index)}
		>
			{text}
		</button>
	);
};

const MobileSectionNavigation = () => {
	return (
		<div class={`${button()} pb-safe bottom-0 flex leading-none shadow-above lg:hidden`}>
			<TabButton text="WORK & EDUCATION" index={0} />
			<TabButton text="PROJECTS" index={1} />
		</div>
	);
};

const DesktopSectionNavigation = () => {
	return (
		<div class={`${button()} top-0 hidden shadow-below lg:flex`}>
			<TabButton text="WORK & EDUCATION" index={0} />
			<TabButton text="PROJECTS" index={1} />
		</div>
	);
};

const SectionNavigation = (props: { work?: JSX.Element; projects?: JSX.Element }) => {
	return (
		<div class="mb-16 overflow-clip rounded lg:col-span-2 lg:m-0">
			<DesktopSectionNavigation />
			<div class="flex flex-col gap-8 bg-base-100 p-6 transition-colors duration-300">
				{currentTab() === 0 ? props.work : props.projects}
			</div>
			<MobileSectionNavigation />
		</div>
	);
};

export default SectionNavigation;
