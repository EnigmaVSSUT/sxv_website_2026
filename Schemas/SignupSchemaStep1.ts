import {z} from "zod";

const SignupSchemaStep1 = z.object({
    name: z.string().nonempty("Name is required").min(3,{message:"Name must be atleat 3 characters long"}).max(20,{message:"Name must not exceed 20 characters."}),
    email : z.string().nonempty("Email is required").email("Invalid email address"),
    phone: z.string().nonempty("Phone number is required.").regex(/^\d+$/, "Phone number should only contain digits.").min(10, { message: "Enter valid phone number." }).max(10, { message: "Enter valid phone number." }),
    regdNo: z.string().nonempty("Registration number is required.").regex(/^\d+$/, "Registration number should only contain digits.").length(10, { message: "Registration number must be exactly 10 digits." })
});

export default SignupSchemaStep1;

export type SignupFormTypeStep1 = z.infer<typeof SignupSchemaStep1>;
