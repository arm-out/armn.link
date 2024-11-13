<script lang="ts">
	import { createLink } from '$lib/turso';
	import type { Row } from '@libsql/client';
	import Link from './Link.svelte';

	const { data } = $props();

	let rows = $state(data.rows);
	let create = $state(false);
	let newLink = $state('');
	let newRedirect = $state('');
	let createDisabled = $state(false);

	function createInput() {
		create = true;
	}

	function createNew() {
		createDisabled = true;
		createLink(newLink, newRedirect)
			.then(() => {
				create = false;
				rows = [{ link: newLink, redirect: newRedirect }, ...rows] as Row[];
				createDisabled = false;
			})
			.catch((error) => {
				alert(error);
				createDisabled = false;
			});
	}
</script>

<div class="flex flex-col gap-2 p-8 text-white">
	<div class="mb-8 flex flex-row gap-28">
		<h1>Admin Panel</h1>
		<button class="rounded px-2 hover:bg-zinc-900" onclick={createInput}>+new</button>
	</div>

	{#if create}
		<div class="flex flex-row gap-4">
			<input
				class="rounded bg-zinc-900 p-2 disabled:text-white/60"
				type="text"
				bind:value={newLink}
				disabled={createDisabled}
			/>
			<input
				class=" min-w-96 rounded bg-zinc-900 p-2 disabled:text-white/60"
				type="text"
				bind:value={newRedirect}
				disabled={createDisabled}
			/>
			<button class="rounded px-2 hover:bg-zinc-900" onclick={createNew}>save</button>
		</div>
	{/if}

	{#key rows}
		{#each rows as row}
			<Link link={row.link as string} redirect={row.redirect as string} />
		{/each}
	{/key}
</div>
