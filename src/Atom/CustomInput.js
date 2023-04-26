
export default function CustomInput({type,className,placeholder}){
    return(
        <div>
            <input className={className} type={type} placeholder={placeholder}/>
        </div>
    )
}