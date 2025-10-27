import * as zod from 'zod';
export const logInSchema=zod.object({
    email: zod.string().nonempty('email is required'),
    password: zod.string().nonempty('password is required').regex(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        "Password must be 6:16 characters long, include at least one number and one special character (!@#$%^&*)."
    ),
})
