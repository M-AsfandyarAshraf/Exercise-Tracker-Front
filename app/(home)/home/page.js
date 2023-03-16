'use client'


import Button from "@/components/button";
import { useEffect, useState } from "react"
import Image from "next/image";
import Modal from "@/components/modal";


const Background = '/illustration.png';


export default function Home() {

  const [User, setUser] = useState({});


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('User')) || null)
  }, [User])


  const handleSubmit = (e) => {

  }


  return (

    <>

      <div className="flex flex-col bg-white w-full h-screen justify-evenly">



        <div className="flex flex-row justify-evenly items-center ">

          <div className="hover:text-orange-500 max-w-xl rounded-lg p-6 shadow-lg">
            <h1 className=" text-2xl p-4">
              Welcome Back, {User.name} 👋
            </h1>

          </div>

          <div className=" hover:shadow-xl hover:bg-orange-100 w-2/6 h-96 rounded-lg p-12 shadow-lg bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${Background})` }} >

            <label htmlFor="my-modal-5" className="btn btn-outline btn-warning mt-20 text-white">➕ Add Exercise</label>
            <br></br>
            <br></br>
            <label htmlFor="my-modal-5" className="btn btn-outline btn-error text-white">🔍View Exercises</label>


          </div>


        </div>




        <div className=" flex flex-row bg-red-300  flex-wrap">
          <div className=" bg-blue-500 ">

          </div>

          <div className=" bg-green-400 ">

          </div>

        </div>



        {/* The Modal That contains the Input Form for a new exercise */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-xl">Exercise Form</h3>
            <br></br>
            <label></label>
            <select className="select select-warning w-full max-w-xs">
              <option disabled selected>Select Exercise Type</option>
              <option>Running</option>
              <option>Swimming</option>
              <option>Yoga</option>
              <option>Cycling</option>
              <option>Weight Lifting</option>
            </select>
            <br></br>
            <br></br>
            <select className="select select-warning w-full max-w-xs">
              <option disabled selected>Select Exercise Duration</option>
              <option value={10}  >10 mins</option>
              <option value={20}>20 mins</option>
              <option value={30}>30 mins</option>
              <option value={40}>40 mins</option>
              <option value={50}>50 mins</option>
              <option value={60}>60 mins</option>
            </select>
            
            <br></br>
            <br></br>
            <input type={"date"}></input>

            <div className="modal-action">
              <button onClick={handleSubmit} className="btn btn-success">Confirm Exercise</button>
              <label htmlFor="my-modal-5" className="btn btn-error">Close</label>
            </div>
          </div>
        </div>


      </div>


    </>


  )
}
