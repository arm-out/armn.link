import { turso } from '$lib/turso';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// let res = await turso.execute(`SELECT redirect FROM links WHERE link = '${params.short}'`);
	// console.log(res.rows[0].redirect);
	return {
		streamed: {
			redirect: turso
				.execute({ sql: `SELECT redirect FROM links WHERE link = ?`, args: [params.short] })
				.then((result) => result.rows[0].redirect || null)
		}
	};
};
