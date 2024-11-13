import { turso } from '$lib/turso';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await turso.execute('SELECT * FROM links');

	return { rows: data.rows };
};
