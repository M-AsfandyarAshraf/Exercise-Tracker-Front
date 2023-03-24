"use client"

import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/button'
import { useState, useEffect} from "react";
import { useRouter } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] });



export default function Signup() {



  const [Name, SetName] = useState("");
  const [Email, SetEmail] =  useState("");
  const [Password, SetPassword] =  useState("");

  const router = useRouter();

    
  useEffect(() => {
    if (localStorage.getItem("token") !== null)
      {
        router.push("/home");
      }

  })




  const HandleSubmit = async (e) =>
  {

    e.preventDefault();    

    
    try{
      const result  = await fetch("http://localhost:5000/signup",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:Name,
          email:Email,
          password:Password
        })
      }
      )
      const data = await result.json()
      
      if(data.User)
      {
        alert(data.User.name + data.message)
        router.push('/login');

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
    <Image src={"/../public/Logo.png"} width = {100} height={100} alt={"Exercise Tracker Logo"}></Image>
    <h1 className='text-7xl '>Sign-Up</h1>
    <span className='text-7lg '>Already a user?
      <Link href={'/login'}><span className='text-7lg text-blue-500'> Sign-In</span></Link>
    </span>
    <form onSubmit={HandleSubmit}>
    <input placeholder='Name' type={'text'} required className=' bg-orange-200' onChange={(e) => SetName(e.target.value)}></input>
      <br></br>
      <br></br>
      <input placeholder='Email' type={'email'} required className=' bg-orange-200' onChange={(e) => SetEmail(e.target.value)}></input>
      <br></br>
      <br></br>
      <input placeholder='******' type={'password'} className=' bg-orange-200' onChange={(e) => SetPassword(e.target.value)}></input>
      <br></br>
      <br></br>
      <Button text="Submit" ></Button>
    </form>
    
    </div>
    </>
   )
}
