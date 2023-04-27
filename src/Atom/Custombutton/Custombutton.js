
export default function Custombutton({text,icon,className,onClick}){
    return(
        <div >
      <button onClick={onClick} className={className}>{icon} {text}</button>
        </div>
    )
}