import * as z from "zod"

export const NewPasswordSchema = z.object ({
    password:z.string().min(6,{
        message:"Min six char required"
    }),
 
})

export const ResetSchema = z.object ({
    email:z.string().email({
        message:"Email is required"
    }),
 
})


export const LoginSchema = z.object ({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(1 , {
        message:"Password can not be empty"
    })
})


export const RegisterSchema = z.object ({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(6 , {
        message:"Minimum six char required"
    }),
    name:z.string().min(1 , {
        message:"Minimum 1 char required"
    })
})

