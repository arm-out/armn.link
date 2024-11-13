import { PUBLIC_DATABASE_URL, PUBLIC_DATABASE_AUTH } from '$env/static/public';
import { createClient } from '@libsql/client';

export const turso = createClient({
	url: PUBLIC_DATABASE_URL,
	authToken: PUBLIC_DATABASE_AUTH
});

export const editLink = async (
	oldLink: string,
	oldRedirect: string,
	newLink: string,
	newRedirect: string
) => {
	return turso.execute({
		sql: 'UPDATE links \
			SET link = ?, redirect = ? \
			WHERE link = ? AND redirect = ?',
		args: [newLink, newRedirect, oldLink, oldRedirect]
	});
};

export const deleteLink = async (link: string, redirect: string) => {
	return turso.execute({
		sql: 'DELETE FROM links WHERE link = ? AND redirect = ?',
		args: [link, redirect]
	});
};
