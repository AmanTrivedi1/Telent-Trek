"use client"
import *  as z from "zod";
import { LoginSchema } from "@/schemas";
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
import { login } from "@/actions/login";
import Link from "next/link";


export const LoginForm = () => {

    const [isPending , startTransition] = useTransition();
    const [error , setError] = useState<string | undefined>("");
    const [success , setSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })
    const onSubmit =  (values: z.infer<typeof LoginSchema>) =>{
        setError("");
        setSuccess("");
        startTransition(()=>{
            login(values)
              .then((data)=>{  
               setError(data?.error );
               setSuccess(data?.success)
              })
        });
    }
    return (
        <>
          <CardWrapper headerLabel="Wellcome Back"
            backButtonLabel="Don't have accout"
            backButtonHref="/auth/register"
            showSocial >
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

                        {/* Password field started from here */}

                        <FormField 
                         control={form.control}
                         name="password"
                         render={({field})=> (
                            <FormItem>
                             <FormLabel>Passowrd</FormLabel>
                             <FormControl>
                                <Input 
                                 className="text-black"
                                 disabled={isPending}
                                 {...field}
                                 placeholder="******"
                                 type="password"
                                />
                             </FormControl>
                             <Button size="sm" variant="link" 
                             asChild
                             className="text-white font-normal ">
                                <Link href="/auth/reset">
                                  Forgot password ?
                                </Link>
                             </Button>
                             <FormMessage/>
                            </FormItem>
                         )}
                        />
                    </div>
                    <FormError message={error }/>
                    <FormSuccess message={success}/>
                    <Button
                    disabled={isPending}
                    
                    type="submit"
                    className="w-full bg-primary_dark hover:bg-primary_dark text-black">Login</Button>
                 </form>
               </Form>
          </CardWrapper>
        </>
    )
}