"use client"
import *  as z from "zod";
import { ResetSchema } from "@/schemas";
import { useState, useTransition } from "react";

import CardWrapper from "./card-wrapper"
import {useForm} from"react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { reset } from "@/actions/reset";


export const ResetForm = () => {
 
    const [isPending , startTransition] = useTransition();
    const [error , setError] = useState<string | undefined>("");
    const [success , setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof ResetSchema>>({
        resolver:zodResolver(ResetSchema),
        defaultValues:{
            email:"",
        }
    })
    const onSubmit =  (values: z.infer<typeof ResetSchema>) =>{
        setError("");
        setSuccess("");

        console.log(values);
        startTransition(()=>{
            reset(values)
              .then((data)=>{  
               setError(data?.error );
               setSuccess(data?.success)
              })
        });
    }
    return (
        <>
          <CardWrapper headerLabel="Forgot your password"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login">
               <Form {...form}>
                 <form
                 className="space-y-6"
                 onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <FormField 
                         control={form.control}
                         name="email"
                         render={({field})=> (
                            <FormItem>
                             <FormLabel>Email</FormLabel>
                             <FormControl>
                                <Input 
                                  className="text-black"
                                  disabled={isPending}
                                 {...field}
                                 placeholder="placeholder@gmail.com"
                                 type="email"
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
                    className="w-full bg-primary_dark hover:bg-primary_dark text-black">Send reset email!</Button>
                 </form>
               </Form>
          </CardWrapper>
        </>
    )
}