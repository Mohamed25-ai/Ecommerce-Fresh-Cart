'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cartcontext } from '@/Contexts/cartContext/CartContext'
import paymentImage from '@Images/creditCard.08febc36272ba154f91e.png'
import Image from 'next/image'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { paymentData, paymentType } from './payment.types'
import { createCashOrder, createCreditOrder } from './payment.action'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function Payment() {
    const { cartId, getCartUpdates } = useContext(cartcontext);
    const router = useRouter();
    const paymentForm = useForm<paymentData>({
        defaultValues: {
            shippingAddress: { details: "", phone: "", city: "" },
        },
        mode: 'onChange',
    });
    const { control, handleSubmit } = paymentForm;
    async function handleCreditOrder(data: paymentData) {
        const creditRes = await createCreditOrder(data, cartId);
        if (creditRes.status === 'success') {
            toast.success('Welcome to stripe payment gateway', {
                className: '!max-w-full !text-[var(--main-color)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            });
            router.replace(creditRes.session.url);
        }
        else {
            toast.error('Your cart is empty', {
                className: '!max-w-full !text-[var(--main-dark)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
            })
        }
    };
    async function handleCashOrder() {
        await handleSubmit(async (data) => {
            try {
                const cashRes = await createCashOrder(data, cartId);
                if (cashRes === 'success') {
                    toast.success('Your oreder has been created successfully', {
                        className: '!max-w-full !text-[var(--main-color)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
                    });
                    await getCartUpdates();
                    router.replace('/');
                } else {
                    toast.error('Your cart is empty', {
                        className: '!max-w-full !text-[var(--main-dark)] !whitespace-nowrap !sm:text-[13px] !lg:text-[25px] !font-semibold',
                    })
                };
            } catch (error) {
                return;
            }
        })();
    };
    return (
        <section className=' container mx-auto'>
            <header className=' w-fit my-3 lg:my-0 lg:w-3/4 mx-auto'>
                <h2 className='text-[var(--main-color)] text-[25px]  font-semibold lg:text-[40px]'>Payment</h2>
            </header>
            <div className='lg:flex items-center justify-center px-5 lg:px-0 lg:w-3/4 mx-auto '>
                <Form {...paymentForm}>
                    <form onSubmit={handleSubmit((data) => { handleCreditOrder(data) })} className='px-5 py-10  lg:w-1/2 bg-white border-1 rounded-xs border-[var(--main-pale)]'>
                        <FormField
                            control={control}
                            name="shippingAddress.details"
                            rules={{ required: 'Adress is required', min: { value: 5, message: 'Adress details must be more than 5 characters ' }, maxLength: { value: 20, message: 'Maximum characters is 50 characters' } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='adress' className='my-3 text-[16px] text-[var(--main-color)]'>Adress Details :</FormLabel>
                                    <FormControl >
                                        <Input id='adress' className='mb-3 focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="shippingAddress.phone"
                            rules={{ required: 'Phone is required', min: { value: 11, message: 'Phone number must be 11 characters ' }, maxLength: { value: 11, message: 'Phone number must be 11 characters' } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='Phone' className='my-3 text-[16px] text-[var(--main-color)]'>Phone :</FormLabel>
                                    <FormControl >
                                        <Input type='tel' id='Phone' className='mb-3 focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="shippingAddress.city"
                            rules={{ required: 'City/Area is required', min: { value: 5, message: 'City/Area must be more than 5 characters ', }, maxLength: { value: 20, message: 'Maximum characters is 50 characters' } }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor='city' className='my-3 text-[16px] text-[var(--main-color)]'>City/Area:</FormLabel>
                                    <FormControl >
                                        <Input id='city' className='mb-3 focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]'  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="payment-btns flex justify-center gap-5">
                            <Button type='submit' className='w-1/4 cursor-pointer bg-[var(--main-color)] hover:bg-transparent  hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500'>Credit Order</Button>
                            <Button type='button' onClick={handleCashOrder} className='w-1/4 cursor-pointer bg-[var(--main-color)] hover:bg-transparent  hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500'>Cash Order</Button>
                        </div>
                    </form>
                </Form>
                <figure className='lg:w-1/2 px-20  lg:p-0'>
                    <Image src={paymentImage} alt='payment Logo' />
                </figure>
            </div>
        </section>
    )
}
