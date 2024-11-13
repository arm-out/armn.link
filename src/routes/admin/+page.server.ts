import { turso } from '$lib/turso';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await turso.execute('SELECT * FROM links');
	console.log(data.rows);

	return { rows: data.rows };

	// return {
	// 	streamed: {
	// 		list: turso.execute('SELECT * FROM links').then((result) => result.rows)
	// 	}
	// };
};
