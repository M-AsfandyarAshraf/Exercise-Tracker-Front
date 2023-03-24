import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
    <h1 className='text-9xl text-orange-500 text-center mt-52'>About Us</h1>
    <h2 className='text-black-500 text-xl text-center mt-7 p-32'>Welcome
    To Exercise Tracker, the number one platform to manage your list of daily activities. 
    <br></br><br></br>
    Sign in now to avail all of our services including daily <b>calorie expenditure, distance covered and analystics!</b></h2>
    </>
   )
}
