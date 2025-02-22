import { type Accessor, createContext, createEffect, createSignal, useContext, type JSX } from 'solid-js';

type Attribute = `data-${string}` | 'class';

interface ThemeProviderProps {
	/** Key used to store theme setting in localStorage */
	storageKey?: string;
	/** Default theme name (for v0.0.12 and lower the default was light). If `enableSystem` is false, the default theme is light */
	defaultTheme?: string;
	/** HTML attribute modified based on the active theme. Accepts `class`, `data-*` (meaning any data attribute, `data-mode`, `data-color`, etc.), or an array which could include both */
	attribute?: Attribute;
	/** Nonce string to pass to the inline script for CSP headers */
	nonce?: string;
}

const MEDIA = '(prefers-color-scheme: dark)';
const isServer = typeof window === 'undefined';
const storageKey = 'theme';
const attribute = 'data-theme';
const defaultTheme = 'dark';

// Helpers
const getTheme = (key: string, fallback?: string) => {
	if (isServer) return undefined;
	let theme: string | undefined;
	try {
		theme = localStorage.getItem(key) || undefined;
	} catch (e) {}
	return theme || fallback;
};

const getSystemTheme = (e: MediaQueryList | MediaQueryListEvent = window.matchMedia(MEDIA)) => {
	const isDark = e.matches;
	const systemTheme = isDark ? 'dark' : 'light';
	return systemTheme;
};

type ScriptFunction = (
	attribute: NonNullable<ThemeProviderProps['attribute']>,
	storageKey: string,
	defaultTheme: NonNullable<ThemeProviderProps['defaultTheme']>,
) => void;

const script: ScriptFunction = (attribute, storageKey, defaultTheme) => {
	const el = document.documentElement;

	function updateDOM(theme: string) {
		el.setAttribute(attribute, theme);
	}

	function getSystemTheme() {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	try {
		const themeName = localStorage.getItem(storageKey) || defaultTheme;
		const isSystem = themeName === 'system';
		const theme = isSystem ? getSystemTheme() : themeName;
		updateDOM(theme);
	} catch (e) {}
};

const ThemeScript = ({ storageKey, attribute, defaultTheme, nonce }: Omit<ThemeProviderProps, 'children'> & { defaultTheme: string }) => {
	const scriptArgs = JSON.stringify([attribute, storageKey, defaultTheme]).slice(1, -1);

	return <script nonce={typeof window === 'undefined' ? nonce : ''} innerHTML={`(${script.toString()})(${scriptArgs})`} />;
};

interface ThemeContextProps {
	/** Update the theme */
	setTheme: (value: string) => void;
	/** Active theme name */
	theme: Accessor<string | undefined>;
}

const ThemeContext = createContext<ThemeContextProps>();

export const ThemeProvider = (props: { children: JSX.Element }) => {
	const [theme, setTheme] = createSignal(getTheme(storageKey, defaultTheme));

	const applyTheme = (theme?: string) => {
		let resolved = theme;
		if (!resolved) return;

		// If theme is system, resolve it before setting theme
		if (theme === 'system') {
			resolved = getSystemTheme();
		}

		const name = resolved;
		const d = document.documentElement;

		const handleAttribute = (attr: Attribute) => {
			if (attr.startsWith('data-')) {
				if (name) {
					d.setAttribute(attr, name);
				} else {
					d.removeAttribute(attr);
				}
			}
		};

		handleAttribute(attribute);
	};

	const handleSetTheme = (value: string) => {
		setTheme(value);

		try {
			localStorage.setItem(storageKey, value);
		} catch (e) {}
	};

	createEffect(() => {
		applyTheme(theme());
		console.log('theme() :>> ', theme());
	});

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme: handleSetTheme,
			}}
		>
			<ThemeScript
				{...{
					storageKey,
					attribute,
					defaultTheme,
				}}
			/>
			{props.children}
		</ThemeContext.Provider>
	);
};

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useThemeContext: cannot find a ThemeContext');
	}
	return context;
}
