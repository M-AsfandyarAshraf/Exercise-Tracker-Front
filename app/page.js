'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/components/button'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {


  useEffect(() => {
    if (localStorage.getItem("token") !== null)
    {
      window.location.replace('/home');
    }

  }, [])

  return (
    <>
    <div className ='h-screen w-full bg-image'>
    <h1 className='text-9xl z-10 text-white pl-56 pt-56 w-3/6 font-bold' style={inter.style} >Exercise Tracker</h1>
    <Link href="/signup">
      <Button css="ml-56 mt-12" text="Get Started" />
    </Link>
    </div>
    </>
   )
}
