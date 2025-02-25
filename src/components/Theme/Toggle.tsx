import { createEffect, type JSX } from 'solid-js';
import { ThemeProvider, useThemeContext } from './Context';

const ThemeToggle = () => {
	const { theme, setTheme } = useThemeContext();

	const handleToggle: JSX.ChangeEventHandlerUnion<HTMLInputElement, Event> = (e) => {
		setTheme(e.target.checked ? 'dark' : 'light');
	};

	const checked = () => theme() === 'dark';
	
	createEffect(() => {
		console.log('checked() :>> ', checked());
	});

	return (
		<label class="swap absolute top-8 right-4 z-20 mx-auto -mt-4 origin-top-right p-4 transition-transform hover:scale-150 lg:top-0">
			<input name="username" type="checkbox" checked={checked()} onChange={handleToggle} />

			<div class="swap-on size-5 border-[7px] border-white bg-black" />

			<div class="swap-off size-5 border-[7px] border-black bg-white" />
		</label>
	);
};

const ThemeToggleWrapper = () => {
	return (
		<ThemeProvider>
			<ThemeToggle />
		</ThemeProvider>
	);
};

export { ThemeToggleWrapper as ThemeToggle };
