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
				toastRef?.classList.remove('animate-[appear_.6s_forwards]', 'opacity-0');
				void toastRef?.offsetWidth;
				toastRef?.classList.add('animate-[appear_.6s_forwards_reverse]');
			}, 15000);
		}
	});

	return (
		<Show when={isRender()}>
			<Portal mount={document.body}>
				<div
					ref={toastRef}
					class="toast bottom-16 z-10 hidden animate-[appear_.6s_forwards] opacity-0 lg:block"
					style={{ 'animation-delay': props.animationDelay ?? '3s' }}
				>
					<div class="alert alert-info text-base-content bg-base-100 flex flex-col border border-gray-300 dark:border-gray-700">
						<For each={props.hints}>
							{(hint) => (
								<span class="flex items-center">
									<Show when={Array.isArray(hint.key)} fallback={<kbd class="kbd">{hint.key as string}</kbd>}>
										<For each={hint.key as string[]}>{(key) => <kbd class="kbd not-first:ml-2">{key}</kbd>}</For>
									</Show>
									<span class="ml-4"> -⠀{hint.description}</span>
								</span>
							)}
						</For>
					</div>
				</div>
			</Portal>
		</Show>
	);
}
