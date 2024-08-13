import { DATABASE_URL, DATABASE_AUTH } from '$env/static/private';
import { createClient } from '@libsql/client';

export const turso = createClient({
	url: DATABASE_URL,
	authToken: DATABASE_AUTH
});
