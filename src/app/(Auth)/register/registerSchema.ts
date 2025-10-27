import * as zod from 'zod';
export const registerSchema=zod.object({
    name: zod.string().nonempty('name is required').min(3, 'name must be more than 3 characters').max(20, 'name must be less than 20 characters'),
    email: zod.string().nonempty('email is required'),
    password: zod.string().nonempty('password is required').regex(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password must be 6:16 characters long, include at least one number and one special character (!@#$%^&*)."
    ),
    rePassword:zod.string().nonempty('repassword is required'),
    phone:zod.string().nonempty('phone is required').length(11,'Phone number must be 11 characters'),
}).refine((field)=>{
    return field.password===field.rePassword;
},{path:['rePassword'],error:'repassword isnot match password'});
