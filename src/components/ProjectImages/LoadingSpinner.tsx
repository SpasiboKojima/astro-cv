import { Show, type Accessor } from 'solid-js';

const LoadingSpinner = ({ isLoading }: { isLoading: Accessor<boolean> }) => {
	return (
		<Show when={isLoading()}>
			<div class="flex-center animate-fade-in fixed inset-0 z-[999999] size-full bg-black/40 opacity-0">
				<span class="loading loading-ring w-12" />
			</div>
		</Show>
	);
};

export default LoadingSpinner;
