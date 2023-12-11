
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    signUp: async ({request, locals}) =>{
        const body = Object.fromEntries(await request.formData())
        const {data, error: err} = await locals.supabase.auth.signUp({
            email: body.email as string ,
            password: body.password as string

        });

        if(err){
            if(err instanceof AuthApiError && err.status == 400){
                return fail(400,{
                    error: "Your email or password is invalid. Get over it."
                }); 
            }

            return fail(500, {
                error: "The server doesn't like you get over it."
            })
        }
        throw redirect(303, "/")

    }
};