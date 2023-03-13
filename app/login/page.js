'use client';

import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import { useState, React } from 'react'
import useSWR from 'swr'
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Login() {

  const [Email, SetEmail] =  useState("");
  const [Password, SetPassword] =  useState("");
  const url = 'http://localhost:5000/'

 

  const HandleSubmit  = async (e) =>
  {
    e.preventDefault();    
    
    
    try{
      const result  = await fetch(url,
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
      console.log(data)
      localStorage.setItem("Token",data.Token) 
      

      window.location.replace("/")

    }
    catch(err){
      alert("Invalid")
    }
  }
  

  return (
    <>
    <div className=' h-screen flex flex-col gap-4 justify-center items-center ' style={inter.style}> 
    <Image src={"/../public/Logo.png"} width = {100} height={100} alt={"Exercise Tracker Logo"}></Image>
    <h1 className='text-7xl '>Log-In</h1>
    <span className='text-7lg '>New User?
      <Link href={'/signup'}><span className='text-7lg text-blue-500'> Create Account</span></Link>
    </span>
    <form onSubmit={HandleSubmit}>
      <input placeholder='Email' type={'email'} required className=' bg-orange-200' onChange={(e)=>{SetEmail(e.target.value)}}></input>
      <br></br>
      <br></br>
      <input placeholder='******' type={'password'} className=' bg-orange-200' onChange={(e)=>{SetPassword(e.target.value)}}></input>
      <br></br>
      <br></br>
      <Button text="Submit" ></Button>
    </form>
    
    </div>
    </>
   )
}
