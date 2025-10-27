'use client'
import React from 'react';
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './registerSchema';
import { registerFormType } from './register.type';
import { handlingRegisterCall } from './registerAction';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


export default function Register() {
  const navigateToSignIn=useRouter();
  const registerForm = useForm<registerFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: 'onChange',
  });
  const { control, handleSubmit,formState } = registerForm;
  async function registerHandling(data: registerFormType) {
    const registerResponse = await handlingRegisterCall(data);
    if (registerResponse) {
      toast.success('Success', {
        style: {
          color:"#0AAD0A",
          fontSize: "18px",
        },
        duration:3000,
      });
      navigateToSignIn.push('/login');
    }
    else {
      toast.error('Account Already Exists', {
        style: {
          color:"red",
          fontSize: "18px",
        },
        duration:3000,
      });
    }
  }
  return (
    <>
      <header className='form-header px-8 text-[30px] font-bold text-[var(--main-color)] lg:w-1/2 lg:px-0 mx-auto mb-5'>
        <h2>Register Now :</h2>
      </header>
      <Form {...registerForm}>
        <form onSubmit={handleSubmit(registerHandling)} className='lg:w-1/2 mx-auto px-8 lg:px-0 flex flex-col gap-3'>
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[16px] text-[var(--main-color)]'>Username:</FormLabel>
                <FormControl >
                  <Input className='focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[16px] text-[var(--main-color)]'>Email:</FormLabel>
                <FormControl >
                  <Input className='focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' type='email' placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[16px] text-[var(--main-color)]'>Password:</FormLabel>
                <FormControl >
                  <Input className='focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' type='password' placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[16px] text-[var(--main-color)]'>Repassword:</FormLabel>
                <FormControl >
                  <Input className='focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' type='password' placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-[16px] text-[var(--main-color)]'>Phone:</FormLabel>
                <FormControl >
                  <Input className='focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' type='tel' placeholder="Enter Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {formState.isValid&&<Button className='cursor-pointer bg-[var(--main-color)] hover:bg-transparent  hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500'>Register</Button>}
          {!formState.isValid&&<Button disabled className='cursor-pointer bg-[var(--main-color)] hover:bg-transparent  hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500'>Register</Button>}
        </form>
      </Form>
    </>
  )
}
