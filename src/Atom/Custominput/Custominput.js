
export default function CustomInput({type,className,placeholder,value}){
    return(
        <div>
            <input className={className} type={type} placeholder={placeholder} value={value}/>
        </div>
    )
}