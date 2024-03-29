'use client'

import './globals.css'
import Navbar from '../components/navbar'
import Navbar_Auth from '@/components/navbar_auth'
import { useState, useEffect } from 'react'



export default function RootLayout({ children }) {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem('token') || null)
  },[token])

  
  //   async function getList() {
  //     const res = fetch('localhost:5000/api/exercises', {
  //       method: 'GET',
  //       headers: {
  //         'x-auth-token': localStorage.getItem('token')
  //       }
  //     })

  //     if (res.status === 200 || res.status === 201) {
  //       const data = await res.json();
  //       // setList(data)
  //     }
  //   }

  //   getList();
  // }, [])
  

  return (
    <html lang="en">
      <body token={token} className=' font-sans '> 
        {(token)?<Navbar_Auth /> : <Navbar/>      }
        {children}
      </body>
    </html>
  )
}
