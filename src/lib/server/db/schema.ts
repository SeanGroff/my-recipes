import { pgTable, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: text('id').primaryKey(),
	age: integer('age'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull()
});

export const session = pgTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	expiresAt: timestamp('expires_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const recipe = pgTable('recipe', {
	id: text('id').primaryKey(),
	title: text('title').notNull(),
	authorId: text('author_id')
		.notNull()
		.references(() => user.id),
	createdAt: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull(),
	updatedAt: timestamp('updated_at', { withTimezone: true, mode: 'date' }).notNull()
});

export const ingredient = pgTable('ingredient', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	recipeId: text('recipe_id')
		.notNull()
		.references(() => recipe.id)
});

export const step = pgTable('step', {
	id: text('id').primaryKey(),
	description: text('description').notNull(),
	recipeId: text('recipe_id')
		.notNull()
		.references(() => recipe.id)
});

export type Session = typeof session.$inferSelect;
export type SessionInsert = typeof session.$inferInsert;

export type User = typeof user.$inferSelect;
export type UserInsert = typeof user.$inferInsert;
