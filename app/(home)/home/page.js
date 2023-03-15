'use client'


import { useEffect } from "react"



export default function Home() {


  const User = async () =>
  {

    const token = localStorage.getItem('token');
    try{
      const result  = await fetch("http://localhost:5000/user",
      {
        method:"GET",
        headers:{
          "Authorization":"token"
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
      
      
      <div className="flex flex-col bg-white w-full h-screen justify-end gap-96 ">



        <div className="flex flex-row bg-purple-500 ">

          <div className=" bg-blue-100 ">

          </div>

          <div className="bg-blue-400 ">

          </div>


        </div>




        <div className=" flex flex-row bg-red-300  flex-wrap">
          <div className=" bg-blue-500 ">

          </div>

          <div className=" bg-green-400 ">

          </div>

        </div>


      </div>
      
     )
  }
  