import z from "zod";

//zod varibles BE will need
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(4),
    name:z.string().optional()
})



export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(4),
    name:z.string().optional()
})



export const createBlogInput  = z.object({
    title:z.string(),
    content:z.string(),
})


export const updateBlogInput  = z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})


//zod type inference so fe get to know the types
//FE will need 
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>