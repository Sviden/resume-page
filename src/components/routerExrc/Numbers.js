
import { useParams } from "react-router-dom"



export function Numbers(){
    const { num } = useParams();
    return(
        <h1>Number {num}</h1>
    )
}