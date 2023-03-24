'use client'

import Card from "@/components/card";
import Button from "@/components/button";
import { useEffect, useState } from "react"
import Image from "next/image";


const Background = '/illustration.png';


export default function Home() {

  const [User, setUser] = useState({});
  const [title, setTitle] = useState("Running");
  const [duration, setDuration] = useState(10);
  const [list, setList] = useState([])
  const [date, setDate] = useState(()=> Date.now());
  


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('User')) || null)
  }, [])



  const getExercises = async () =>
  {
    
    try{
      const result  = await fetch("http://localhost:5000/exercises",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          exercises:User.exercises,
        })
      }
      )
      const data = await result.json()
      
      if(data != null)
      {
       setList(data) ;
      }
      
      else
      {
        throw(data);
      }

        }

    catch(err){
      alert(err)
    }


    
    
  }



  const handleSubmit = async (e) => {
    
    e.preventDefault();    
    
    try{
      const result  = await fetch("http://localhost:5000/exercise",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "token": localStorage.getItem("token")
        },
        body:JSON.stringify({
          title:title,
          duration:duration,
          date: date
        })
      }
      )
      const data = await result.json()
      
      if(data.exercises)
      {
        localStorage.setItem('User',
          JSON.stringify({
            "name": data.name,
            "email": data.email,
            "exercises": data.exercises
          })
        )
      setUser(JSON.parse(localStorage.getItem('User')));
      alert(data.message);
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
            <label htmlFor="my-modal-5" onClick={getExercises} className="btn btn-outline btn-error text-white">🔍View Exercises</label>


          </div>


        </div>




        <div className=" flex flex-row justify-center bg-orange-400  flex-wrap">

          <div className="stats stats-vertical lg:stats-horizontal shadow m-20">

            <div className="stat hover:bg-orange-100">
              <div className="stat-title">Calories Burned</div>
              <div className="stat-value">31000</div>
            </div>

            <div className="stat hover:bg-orange-100">
              <div className="stat-title">Distance Covered</div>
              <div className="stat-value">4,200</div>
            </div>

            <div className="stat hover:bg-orange-100">
              <div className="stat-title">Exercise Time</div>
              <div className="stat-value">1,200</div>
            </div>

            <div className="stat hover:bg-orange-100">
              <div className="stat-title">Sessions Completed</div>
              <div className="stat-value">1,200</div>
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
            <select required onChange={(e) => setTitle(e.target.value)}  defaultValue={title}  className="select select-warning w-full max-w-xs">
              <option disabled>Select Exercise Type</option>
              <option defaultValue={"Running"}>Running</option>
              <option defaultValue={"Swimming"}>Swimming</option>
              <option defaultValue={"Yoga"}>Yoga</option>
              <option defaultValue={"Cycling"}>Cycling</option>
              < option defaultValue={"Weight-Lifting"}>Weight-Lifting</option>
            </select>
            <br></br>
            <br></br>
            <select required onChange={(e) => setDuration(e.target.value)}  defaultValue={duration} className="select select-warning w-full max-w-xs">
              <option disabled>Select Exercise Duration (mins)</option>
              <option defaultValue={10}>10</option>
              <option defaultValue={20}>20</option>
              <option defaultValue={30}>30</option>
              <option defaultValue={40}>40</option>
              <option defaultValue={50}>50</option>
              <option defaultValue={60}>60</option>
            </select>

            <br></br>
            <br></br>
            <input required onChange={(e) => setDate(e.target.value)} defaultValue={date} type={"date"} className=" border-2 rounded-lg border-warning w-full max-w-xs"></input>

            <div className="modal-action">
              <button onClick={handleSubmit} type="submit" className="btn btn-success">Confirm Exercise</button>
              <label htmlFor="my-modal-4" className="btn btn-error">Close</label>
            </div>
          </div>
        </div>


      {/* The modal that contains all the list of exercises */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {/* <h3 className="font-bold text-lg">All Exercises!</h3> */}
            <div className="flex flex-wrap gap-3">
              {
                  list.map( item => <Card key={item._id} title={item.title} duration={item.duration} status={item.status} />)
                  }      
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
