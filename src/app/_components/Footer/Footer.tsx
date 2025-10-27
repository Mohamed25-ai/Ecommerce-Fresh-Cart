import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import americanExpress from '@Images/americanexpress.23e3b98512ffad5d0ad1.png'
import masterCard from '@Images/mastercard.c1c3f1e9c8aad6e536df.png'
import payPal from '@Images/paypal.e3abf7ded251409784b6.png'
import googlePlay from '@Images/googleplay.88c0cf672ae4dd873d7f.png'
import appStore from '@Images/appstore.11156c0c81561772662d.png'
import Image from 'next/image'



export default function Footer() {
  return (
    <footer className='bg-[var(--main-pale)] mt-10 p-5 '>
      <section className='container  mx-auto lg:px-15  '>
        <h2 className=' text-[40px] font-semibold text-[var(--main-color)]'>Get The FreshCart App</h2>
        <p className='mb-5 text-[var(--main-dark)] opacity-90'>We will send you a link, Open it in your phone to download App</p>
        <div className="share-app flex flex-col lg:flex-row  pb-10 border-b-1 border-[var(--main-color)]">
          <Input type="text" placeholder='Enter your Email' typeof='Email' className=' lg:w-3/4 bg-white placeholder:text-[var(--main-color)]  focus-visible:ring-[2px] border-[var(--main-pale)] focus-visible:ring-[var(--main-color)] focus-visible:border-[var(--main-color)]' />
          <Button className='mt-4 lg:mt-0 lg:ms-4 lg:w-1/4 cursor-pointer bg-[var(--main-color)] hover:bg-transparent  hover:text-[var(--main-color)] hover:border-[2px] hover:border-[var(--main-color)] duration-500' >Share App Link</Button>
        </div>
      </section>
      <section className='container  mx-auto lg:px-15 flex lg:justify-between flex-wrap  '>
        <div className="payment-images flex">
          <Image className='object-contain' src={americanExpress} alt='americanExpress' width={80}  />
          <Image className='object-contain' src={masterCard} alt='americanExpress' width={80}  />
          <Image className='object-contain' src={payPal} alt='americanExpress' width={80}  />
        </div>
        <div className='stores flex  '>
          <Image className='object-contain' src={googlePlay} alt='americanExpress' width={150}  />
          <Image className='object-contain' src={appStore} alt='americanExpress' width={150}  />
        </div>
      </section>
      <p className='text-center text-[var(--main-dark)] font-semibold'>Copy Right 2025 © By Mohamed Ahmed All Rights Reserved</p>
    </footer>
  )
}








