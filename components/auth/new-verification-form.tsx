"use client"

import {BeatLoader} from "react-spinners"
import { useSearchParams } from "next/navigation";
import {FormError} from "@/components/form.error"
import { Suspense } from 'react'
import {FormSuccess} from "@/components/form-success"
import  {
    Card,
    CardFooter ,
    CardHeader
  } from "@/components/ui/card"
import { Header } from "./header";
import Link from "next/link";
import { newVerification } from "@/actions/new-verification";
import { useCallback, useEffect  , useState} from "react";
const NewVerificationForm = () => {

    const searchParams = useSearchParams();
    const [error , setError] = useState<string | undefined>();
    const [success , setSuccess] = useState<string | undefined>();
    const token = searchParams.get("token")

    const onSubmit = useCallback(() =>{

        if(success || error) return;

        if(!token) {
            setError("Missing token !")
            return ;
        }
       newVerification(token).then((data)=>{
          setSuccess(data.success);
          setError(data.error);
       }).catch(()=>{
          setError("Something went wrong !")
       })
    },[token , success , error])

    useEffect(()=>{
        onSubmit();
    }, [onSubmit])

  return (
    <Suspense>
    <Card className="sm:w-[400px]  bg-base border-primary_dark w-[350px] ">
    <CardHeader>
      <Header label="Oops! Something went wrong"/>      
    </CardHeader>
     <CardFooter>
       
    </CardFooter>
    <div className="flex items-center pb-4 w-full justify-center">
       {!success && !error && (
           <BeatLoader color="#FFFFFF"/>
       )}
       <FormSuccess message={success}/>
       {!success && (
           <FormError message={error}/>
       )}
    </div>
    <Link href="/auth/login" className="hover:underline text-white p-2 flex items-center justify-center w-full">back to login</Link>
</Card>
</Suspense>
  )
}
 
export default NewVerificationForm;
