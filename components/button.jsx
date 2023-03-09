export default function Button (props) {

const styling = " group rounded-2xl h-12 w-48 bg-orange-500 font-bold text-xl text-white relative overflow-hidden";

return (
    <button className={props.css + styling} >
    {props.text}
    <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
    </div>
    </button>
)


}