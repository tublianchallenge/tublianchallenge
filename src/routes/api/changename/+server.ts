// src/routes/api/protected-route/+server.ts
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
    if (!session) {
        // the user is not signed in
        throw error(401, { message: 'Unauthorized' });
    }
    const { data } = await supabase.from('user-management').select('*');

    return json({ data });
};

export const POST: RequestHandler = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
    if (!session) {
        // the user is not signed in
        throw error(401, { message: 'Unauthorized' });
    }
    const { data } = await supabase.from('user-management').select('*');

    return json({ data });
};