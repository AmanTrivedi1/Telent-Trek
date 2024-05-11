"use server"
import * as z from  "zod";
import { LoginSchema } from "@/schemas";
import {signIn} from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import {generateVerificationToken} from "@/lib/token"
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
export const login = async (values : z.infer <typeof LoginSchema>) =>{
  const validatedFields = LoginSchema.safeParse(values);
  if(!validatedFields.success) {
    return {error :"Invalid Fields!"}
  }
  const {email , password } = validatedFields.data;
  const exixtingUser = await getUserByEmail(email);
  if(!exixtingUser || !exixtingUser.email || !exixtingUser?.password ) {
    return {error: "Email does not exists"}
  }
  if(!exixtingUser.emailVerified) {
    const verificationToken =  await generateVerificationToken (
      exixtingUser.email,
    )
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )
    return {success: "Confirmation email sent !"}
  }
  try {
    await signIn("credentials" , {
      email,
      password,
      redirectTo:DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
     if(error instanceof AuthError){
      switch (error.type){
         case"CredentialsSignin": 
           return {error :"Invalid Credentials"}
      default: 
          return{error : "Something went wrong!"} 
      }
     }
     throw error;
  }

}