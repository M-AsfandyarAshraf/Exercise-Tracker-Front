"use client"

import { useState, useEffect} from "react";
import { useRouter } from 'next/navigation'


import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
const inter = Inter({ subsets: ['latin'] });


export default function Login() {

const router = useRouter();
  
  const [Email, SetEmail] =  useState("");
  const [Password, SetPassword] =  useState("");

 

  const HandleSubmit  = async (e) =>
  {
    e.preventDefault();    
       
    
    try{
      const result  = await fetch("http://localhost:5000/login",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:Email,
          password:Password
        })
      }
      )
      const data = await result.json()
      
      if(data.token)
      {
        localStorage.setItem('token', data.token);
        // router.push('/home');
        localStorage.setItem('User',
          JSON.stringify({
            "name": data.name,
            "email": data.email,
            "exercises": data.exercises
          })
        )
        window.location.replace("/home");
        

      }
      
      else
      {
        throw(data.message);
      }

        }

    catch(err){
      alert(err)
    }
  }

  
  return (
    <>
    <div className=' h-screen flex flex-col gap-4 justify-center items-center ' style={inter.style}> 
    <Image src={"/../public/Logo.png"} width = {100} height={100} alt={"Exercise Tracker Logo"} className=" h-32 w-auto"></Image>
    <h1 className='text-7xl '>Log-In</h1>
    <span className='text-7lg '>New User?
      <Link href={'/signup'}><span className='text-7lg text-blue-500'> Create Account</span></Link>
    </span>
    <form onSubmit={HandleSubmit}>
      <input placeholder='Email' type={'email'} required className=' bg-orange-200' onChange={(e) => SetEmail(e.target.value)} ></input>
      <br></br>
      <br></br>
      <input placeholder='******' type={'password'} className=' bg-orange-200'  onChange={(e) => SetPassword(e.target.value)}></input>
      <br></br>
      <br></br>
      <Button text="Sign in"/>
    </form>    
    </div>
    </>
   )
}
