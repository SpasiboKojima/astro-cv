import { createEffect, For, Show } from 'solid-js';
import { Portal } from 'solid-js/web';

export interface KeyHint {
	key: string | string[];
	description: string;
}

export interface KeyHintsProps {
	hints: KeyHint[];
	storageKey: string;
	animationDelay?: string;
	isRender?: boolean;
}

export function KeyHints(props: KeyHintsProps) {
	let toastRef: HTMLDivElement | undefined;

	const isUsed = typeof localStorage !== 'undefined' && localStorage.getItem(props.storageKey) === 'true';

	const isRender = () => !isUsed && props.isRender;

	createEffect(() => {
		if (isRender()) {
			setTimeout(() => {
				toastRef?.classList.remove('motion-safe:animate-[appear_.6s_forwards]', 'animate-[fade-in_.6s_forwards]', 'opacity-0');
				void toastRef?.offsetWidth;
				toastRef?.classList.add('motion-safe:animate-[appear_.6s_forwards_reverse]', 'animate-[fade-in_.6s_forwards]');
			}, 15000);
		}
	});

	return (
		<Show when={isRender()}>
			<Portal mount={document.body}>
				<div
					ref={toastRef}
					class="toast bottom-16 z-10 hidden motion-safe:animate-[appear_.6s_var(--ease-out)_forwards] animate-[fade-in_var(--ease-out)_.6s_forwards] opacity-0 lg:block"
					style={{ 'animation-delay': props.animationDelay ?? '3s' }}
				>
					<div class="alert text-base-content bg-surface shadow-overlay flex flex-col border-none">
						<For each={props.hints}>
							{(hint) => (
								<span class="flex items-center">
									<Show when={Array.isArray(hint.key)} fallback={<kbd class="kbd">{hint.key as string}</kbd>}>
										<For each={hint.key as string[]}>{(key) => <kbd class="kbd not-first:ml-2">{key}</kbd>}</For>
									</Show>
									<span class="mb-1 ml-4"> -⠀{hint.description}</span>
								</span>
							)}
						</For>
					</div>
				</div>
			</Portal>
		</Show>
	);
}
