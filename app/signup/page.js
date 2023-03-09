import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'

const inter = Inter({ subsets: ['latin'] });


export default function Signup() {
  return (
    <>
    <div className=' h-screen flex flex-col gap-4 justify-center items-center ' style={inter.style}> 
    <Image src={"/../public/Logo.png"} width = {100} height={100} alt={"Exercise Tracker Logo"}></Image>
    <h1 className='text-7xl '>Sign-Up</h1>
    <span className='text-7lg '>Already a user?
      <Link href={'/login'}><span className='text-7lg text-blue-500'> Sign-In</span></Link>
    </span>
    <form action='/api/signup'>
    <input placeholder='Name' type={'text'} required className=' bg-orange-200'></input>
      <br></br>
      <br></br>
      <input placeholder='Email' type={'email'} required className=' bg-orange-200'></input>
      <br></br>
      <br></br>
      <input placeholder='******' type={'password'} className=' bg-orange-200'></input>
      <br></br>
      <br></br>
      <Button text="Submit" ></Button>
    </form>
    
    </div>
    </>
   )
}
