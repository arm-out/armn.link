<script lang="ts">
	import Link from './Link.svelte';

	const { data } = $props();
	let rows = data.rows;
	console.log(rows);
</script>

<div class="flex flex-col gap-2 p-8 text-white">
	<h1>Admin Panel</h1>

	{#each rows as row}
		<Link link={row.link as string} redirect={row.redirect as string} />
	{/each}
</div>
