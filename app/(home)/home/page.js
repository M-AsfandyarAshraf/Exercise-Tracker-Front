'use client'

import Card from "@/components/card";
import Button from "@/components/button";
import { useEffect, useState } from "react"
import Image from "next/image";


const Background = '/illustration.png';


export default function Home() {

  const [User, setUser] = useState({});


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('User')) || null)
  }, [])


  const handleSubmit = (e) => {

  }


  return (

    <>

      <div className="flex flex-col bg-white w-full h-screen justify-evenly">



        <div className="flex flex-row justify-evenly items-center ">

          <div className="hover:text-orange-500 max-w-xl rounded-lg p-6 shadow-lg">
            <h1 className=" text-2xl p-4">
              Welcome back, {User.name} 👋
            </h1>

          </div>

          <div className=" hover:shadow-xl hover:bg-orange-100 w-3/6 h-96 rounded-lg p-12 shadow-lg bg-contain bg-no-repeat bg-right" style={{ backgroundImage: `url(${Background})` }} >

            <label htmlFor="my-modal-4" className="btn btn-outline btn-warning mt-20 text-white">➕ Add Exercise</label>
            <br></br>
            <br></br>
            <label htmlFor="my-modal-5" className="btn btn-outline btn-error text-white">🔍View Exercises</label>


          </div>


        </div>




        <div className=" flex flex-row justify-center bg-orange-400  flex-wrap">

          <div className="stats stats-vertical lg:stats-horizontal shadow m-20">

            <div className="stat">
              <div className="stat-title">Calories Burned</div>
              <div className="stat-value">31000</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-title">Distance Covered</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Exercise Time</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat">
              <div className="stat-title">Sessions Completed</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

          </div>


        </div>



        {/* The Modal That contains the Input Form for a new exercise */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-xl">Exercise Form</h3>
            <br></br>
            <label></label>
            <select className="select select-warning w-full max-w-xs">
              <option disabled>Select Exercise Type</option>
              <option defaultValue={"Running"}>Running</option>
              <option defaultValue={"Swimming"}>Swimming</option>
              <option defaultValue={"Yoga"}>Yoga</option>
              <option defaultValue={"Cycling"}>Cycling</option>
              < option defaultValue={"Weight-Lifting"}>Weight-Lifting</option>
            </select>
            <br></br>
            <br></br>
            <select className="select select-warning w-full max-w-xs">
              <option disabled>Select Exercise Duration</option>
              <option defaultValue={10}  >10 mins</option>
              <option defaultValue={20}>20 mins</option>
              <option defaultValue={30}>30 mins</option>
              <option defaultValue={40}>40 mins</option>
              <option defaultValue={50}>50 mins</option>
              <option defaultValue={60}>60 mins</option>
            </select>

            <br></br>
            <br></br>
            <input type={"date"}></input>

            <div className="modal-action">
              <button onClick={handleSubmit} className="btn btn-success">Confirm Exercise</button>
              <label htmlFor="my-modal-4" className="btn btn-error">Close</label>
            </div>
          </div>
        </div>


      {/* The modal that contains all the list of exercises */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {/* <h3 className="font-bold text-lg">All Exercises!</h3> */}
            <div className="flex flex-wrap gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn btn-error">Close!</label>
            </div>
          </div>
        </div>


      </div>


    </>


  )
}
