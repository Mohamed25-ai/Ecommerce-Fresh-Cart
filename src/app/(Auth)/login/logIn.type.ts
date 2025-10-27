import { logInSchema } from "./logInSchema";
import * as zod from 'zod';
export type logInFormType=zod.infer<typeof logInSchema>;


