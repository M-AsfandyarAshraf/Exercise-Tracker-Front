export default function Card () {

    
    return (
<div className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img src="/exercise.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Running</h2>
    <p>30 Mins</p>
    <div className="card-actions justify-end">
      <button className="btn btn-success">Complete</button>
    </div>
  </div>
</div>    )
    
    
    }