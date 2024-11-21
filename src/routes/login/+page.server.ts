import { encodeBase32LowerCase } from '@oslojs/encoding';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	login: async (event) => {
		// 1) Get Username & Password from formData
		// 2) Validate username and password
		// 3) Query the database for the user by the username
		// 4) Check if the user exists
		// 5) Verify the password
		// 6) Generate a session token
		// 7) Create a session in the database
		// 8) Set the session token cookie
		// 9) Redirect to the main page
	},
	register: async (event) => {
		// 1) Get Username & Password from formData
		// 2) Validate username and password
		// 3) generate a user ID
		// 4) Hash the password
		// 5) Insert the user into the database
		// 6) Generate a session token
		// 7) Create a session in the database
		// 8) Set the session token cookie
		// 9) Redirect to the main page
	}
} satisfies Actions;

function generateUserId() {
	// ID with 120 bits of entropy, or about the same as UUID v4.
	const bytes = crypto.getRandomValues(new Uint8Array(15));
	const id = encodeBase32LowerCase(bytes);
	return id;
}

function validateUsername(username: unknown): username is string {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 31 &&
		/^[a-z0-9_-]+$/.test(username)
	);
}

function validatePassword(password: unknown): password is string {
	return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
