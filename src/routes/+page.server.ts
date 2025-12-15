import type { Actions } from './$types';
import { superValidate, message } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

import { pipe, string, object, email, minLength } from 'valibot';
const formSchema = object({
	name: pipe(string(), minLength(2)),
	email: pipe(string(), email()),
	message: pipe(string(), minLength(10))
});

export const load = async () => {
	const form = await superValidate(valibot(formSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, valibot(formSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, 'Form posted successfully!');
	}
} satisfies Actions;
