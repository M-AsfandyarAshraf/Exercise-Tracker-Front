
export default function Greeting (props) {



    return (
        <button className={props.css} >
        {props.text}
        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 
        group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
        </div>
        </button>
    )
    
    
    }