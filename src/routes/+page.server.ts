
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    signUp: async ({request, locals}) =>{
        const body = Object.fromEntries(await request.formData());

        let email: string = body.email as string;
        let password: string = body.password as string;
       
        if (!email || !password) {
            return fail(400, {
                error: "need username and password"
            })
        }

        
        console.log("attempting to sign up with supabase");
        const {data, error: err} = await locals.supabase.auth.signUp({
            email: body.email as string ,
            password: body.password as string
        });


        if(err){
            if(err instanceof AuthApiError && err.status == 400){
            console.log("invalid email and password")
                return fail(400,{
                    error: "Your email or password is invalid. Get over it."
                });
            }else{
                console.error("server error", err)

                return fail(500, {
                    error: "The server doesn't like you get over it."
                })
            }
           
        }
        throw redirect(303, "/")

    }
};