import z from "zod";

//zod varibles
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(4),
    name:z.string().optional()
})

//zod type inference so fe get to know the types
export type SignupInput = z.infer<typeof signupInput>