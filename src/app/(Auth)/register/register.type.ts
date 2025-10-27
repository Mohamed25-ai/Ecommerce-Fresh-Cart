import { registerSchema } from "./registerSchema";
import * as zod from 'zod';
export type registerFormType=zod.infer<typeof registerSchema>;


