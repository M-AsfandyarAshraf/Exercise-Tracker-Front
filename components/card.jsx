export default function Card(props) {



  function selectPicture (title) 
  {
    switch(title)
    {
      case "Running": return <img src="/exercise.jpg" />
      case "Cycling": return <img src="/cycling.jpg" />
      case "Yoga": return <img src="/yoga.jpg" />
      case "Swimming": return <img src="/swimming.jpg" />
      case "Weight-Lifting": return <img src="/weight-lifting.jpg" />
      default: return <img src="/exercise.jpg" />
    }

  }

  return (
    <div className="card card-compact w-52 bg-base-100 shadow-xl">
      <figure>
        {selectPicture(props.title) }
        </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.duration} Mins</p>
        <div className="card-actions justify-end">
          {(props.status=="Pending")? <button className="btn btn-warning">{props.status}</button>:<button className="btn btn-success">{props.status}</button>  } 
        </div>
      </div>
    </div>)


}