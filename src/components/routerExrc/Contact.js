import { Link, useOutlet, useOutletContext } from "react-router-dom"


export function Contact(){
   
    const outletContext = useOutletContext();

    return(
        <>
        <h1>Contacts</h1>
        <h2>{outletContext.contextName}</h2>
        </>
    )
}