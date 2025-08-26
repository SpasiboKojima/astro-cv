import { Show, type Accessor } from 'solid-js';

const LoadingSpinner = ({ isLoading }: { isLoading: Accessor<boolean> }) => {
	return (
		<Show when={isLoading()}>
			<div class="flex-center fixed inset-0 z-[999999] size-full animate-[fade-in_.3s_forwards_.5s] bg-black/40 opacity-0">
				<span class="loading loading-ring w-12" />
			</div>
		</Show>
	);
};

export default LoadingSpinner;
