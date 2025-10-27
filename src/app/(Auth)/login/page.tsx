'use client'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { logInSchema } from './logInSchema';
import { logInFormType } from './logIn.type';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';

export default function Login() {
  const logInForm = useForm<logInFormType>({
      resolver: zodResolver(logInSchema),
      defaultValues: {
        email: "",
        password: "",
      },
      mode: 'onChange',
    });
    const { control, handleSubmit,formState } = logInForm;
    const {isSubmitting,isValid}=logInForm.formState;
    const logInNavigation=useRouter();
  
  async function logInHandling(data:logInFormType) {
    const logInRes=await signIn('credentials',{...data ,redirect:false});
    if(logInRes?.ok){
      logInNavigation.push('/');
      toast.success('Welcome',{
        duration:3000,
        style:{
          color:'var(--main-color)',
          fontSize:'18px',
        }
      })
    }
    else{
      toast.error('invalid email or password',{
        duration:3000,
        style:{
          color:'red',
          fontSize:'18px',
        }
      });
      return;
    }
  }
  
  return (
    <>
      <header className='form-header px-8 text-[30px] font-bold text-[var(--main-color)] lg:w-1/2 lg:px-0 mx-auto mb-5'>
        <h2>Login Now:</h2>
      </header>
      <Form {...logInForm}  >
        <form onSubmit={handleSubmit(logInHandling)} className='h-[50vh] mb-10 lg:w-1/2 mx-auto px-8 lg:px-0 flex flex-col gap-3'>
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
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="cursor-pointer bg-[var(--main-color)] hover:bg-transparent hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500"
          >
            {isSubmitting ? (
              <>
                <ScaleLoader color='#0AAD0A' className='text-[var(--main-color)] 'aria-hidden="true" />
              </>
            ) : (
              'Log In'
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}
