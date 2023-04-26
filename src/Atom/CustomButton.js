
export default function CustomButton({text,icons,className}){
    return(
        <div >
      <button className={className} icons={icons}> {text}</button>
        </div>
    )
}