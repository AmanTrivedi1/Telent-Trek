"use client"
import *  as z from "zod";
import { LoginSchema } from "@/schemas";

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

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        }
    })

    const onSubmit =  (values: z.infer<typeof LoginSchema>) =>{
        console.log(values);
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
                    <FormError message=""/>
                    <FormSuccess message=""/>
                    <Button
                    type="submit"
                    className="w-full">Submit</Button>
                 </form>
               </Form>
          </CardWrapper>
        </>
    )
}