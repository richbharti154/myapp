
export default function Custombutton({text,icon,className}){
    return(
        <div >
      <button className={className}>{icon} {text}</button>
        </div>
    )
}