"use client"
import *  as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { newPassword } from "@/actions/new-password";
import CardWrapper from "./card-wrapper"
import {useForm} from"react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {useSearchParams} from "next/navigation"

import {
Form,
FormControl,
FormField,
FormItem,
FormLabel,
FormMessage

} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form.error";
import FormSuccess from "../form-success";



export const NewPasswordForm = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [isPending , startTransition] = useTransition();
    const [error , setError] = useState<string | undefined>("");
    const [success , setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver:zodResolver(NewPasswordSchema),
        defaultValues:{
            password:"",
        }
    })
    const onSubmit =  (values: z.infer<typeof NewPasswordSchema>) =>{
        setError("");
        setSuccess("");

        console.log(values);
        startTransition(()=>{
            newPassword(values , token)
              .then((data)=>{  
               setError(data?.error );
               setSuccess(data?.success)
              })
        });
    }
    return (
        <>
       
          <CardWrapper headerLabel="Enter your new password"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login">
               <Form {...form}>
                 <form
                 className="space-y-6"
                 onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <FormField 
                         control={form.control}
                         name="password"
                         render={({field})=> (
                            <FormItem>
                             <FormLabel>Password</FormLabel>
                             <FormControl>
                                <Input 
                                  className="text-black"
                                  disabled={isPending}
                                 {...field}
                                 placeholder="******"
                                 type="password"
                                />
                             </FormControl>
                             <FormMessage/>
                            </FormItem>
                         )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full bg-primary_dark hover:bg-primary_dark text-black">Reset my password!</Button>
                 </form>
               </Form>
          </CardWrapper>
        </>
    )
}