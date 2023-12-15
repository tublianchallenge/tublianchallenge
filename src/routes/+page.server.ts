
import { AuthApiError, type Provider } from "@supabase/supabase-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { ZodSchema, z } from "zod";

const registrationSchema: ZodSchema = z.object({

    email:
        z.string({required_error: "email is required"})
        .min(1, {message: "email is required"})
        .max(64, {message: "email can't exceed 64 characters"})
        .email({message: "must be a valid email address"}),

    password:
        z.string()
        .min(6, {message: "password must be at least 6 characters"})
        .max(64, {message: "password can't exceed 64 characters"})
        .trim(),

    first_name: 
        z.string({required_error: "first name is required"})
        .min(1, {message: "first name is required"}),

    last_name: 
        z.string({required_error: "last name is required"})
        .min(1, {message: "last name is required"})
})
export const actions: Actions = {
    signUp: async ({request, locals, url}) =>{

        const provider = url.searchParams.get("provider") as Provider;

        //turning form request data into js object
        const body = Object.fromEntries(await request.formData());
        try{
            const result = registrationSchema.parse(body);
            console.log("information valid");
            console.log(result);
        }catch(err){
            console.log(err.flatten());
            // const errors = err.flatten().fieldErrors
            const { fieldErrors: errors} = err.flatten();
            const {password, ...rest} = body;
            return{
                data: rest,
                errors
            }

        }
        if(provider){
            const {data, error: err} = await locals.supabase.auth.signInWithOAuth({
                provider: provider,
                
            })

            if(err){
                console.log(err);
                return fail(400, {
                    error: "something went wrong with google sign in :("
                })
            }
            else{
                console.log(data);
                throw redirect(303, data.url);
            }
        }
        
        console.log("attempting to sign up with supabase\n");

        const {data, error: err} = await locals.supabase.auth.signUp({
            email: body.email as string,
            password: body.password as string,
            options: {
              data: {
                first_name: `${body.first_name as string}`,
                last_name: `${body.last_name as string}`,
                payment_plan: "new",
              },
            },
        });

        if(err){
            if(err instanceof AuthApiError && err.status == 400){
            console.log("invalid email and password")
                return fail(400,{
                    error: `${body.email as string} or password is invalid. Get over it.`
                });
            }else{
                console.error("server error", err)

                return fail(500, {
                    error: "The server doesn't like this. Get over it."
                });
            }
        
        }
        throw redirect(303, "/");
    }
};