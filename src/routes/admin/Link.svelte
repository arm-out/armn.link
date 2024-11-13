<script lang="ts">
	import { deleteLink, editLink } from '$lib/turso';

	let { link = '', redirect = '' } = $props();

	let nodeRef: HTMLDivElement;
	let disabled = $state(true);
	let newLink = $state(link);
	let newRedirect = $state(redirect);

	function onSave() {
		editLink(link, redirect, newLink, newRedirect)
			.then((res) => {
				link = newLink;
				redirect = newRedirect;
				disabled = true;
			})
			.catch((error) => {
				alert(error);
			});
	}

	function onDelete() {
		deleteLink(link, redirect)
			.then((res) => {
				nodeRef.remove();
			})
			.catch((error) => {
				alert(error);
			});
	}
</script>

<div class="flex flex-row gap-4" bind:this={nodeRef}>
	<input
		class="rounded bg-zinc-900 p-2 disabled:text-white/60"
		type="text"
		bind:value={newLink}
		{disabled}
	/>
	<input
		class=" min-w-96 rounded bg-zinc-900 p-2 disabled:text-white/60"
		type="text"
		bind:value={newRedirect}
		{disabled}
	/>

	<div class="flex flex-row">
		<button
			class="rounded px-2 hover:bg-zinc-900 disabled:text-white/60 disabled:hover:bg-inherit"
			onclick={() => {
				disabled = false;
			}}>edit</button
		>

		<button
			class="rounded px-2 hover:bg-zinc-900 disabled:text-white/60 disabled:hover:bg-inherit"
			{disabled}
			onclick={onSave}>save</button
		>
		<button
			class="rounded px-2 hover:bg-zinc-900 disabled:text-white/60 disabled:hover:bg-inherit"
			onclick={onDelete}>delete</button
		>
	</div>
</div>
