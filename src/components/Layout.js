
import {useRef } from "react";
import { HeaderMainText } from "./HeaderMainText";
import styled from "styled-components";
import { MySectionBlock } from "./ViewEx";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";



const MainContainer = styled.div
`
width: 100%;
max-width: 100%;
@media only screen and (max-width: 500px) {

  max-width: 100%;

}

`
const NavHolder = styled.div`
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center; 
  background-color: rgba(255, 255, 255, .15);  
  backdrop-filter: blur(5px);
  ul{
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: flex-end;
    list-style: none;
    gap: 3rem;
    margin: 2rem 5vw 0 0;
    font-size: 1rem;
    letter-spacing: 2px;
  }  
  li:hover{
    color: #a2d2ff;
    cursor: pointer;
  }

  @media only screen and (max-width: 500px) {
    
    ul{
      gap: 1rem;
      max-width: 100vw;
      display: flex;
      justify-content: flex-start;
      font-size: 1.1em;
      padding-left: 0.8em;
    }

  }

  
`

   



export function Layout(){
  
    const refAbout = useRef();
    const refExp = useRef();
    const refProj = useRef();
    const refContact = useRef();

    
    const scroll = (el) =>{
          el.current.scrollIntoView({behavior: 'smooth'})
    }



    return(
        <>
        <MainContainer>
        <NavHolder >
            <ul>
                <li onClick={() => scroll(refAbout)}>About</li>
                <li onClick={() => scroll(refExp)}>Experience</li>
                <li  onClick={() => scroll(refProj)}>Projects</li>
                <li  onClick={() => scroll(refContact)}>Contact</li>
            </ul>
     </NavHolder> 
       <div ref={refAbout}><HeaderMainText/></div> 
       <div ref={refExp}><Experience/></div>
       <div ref={refProj}> <Projects/></div>
       <div ref={refContact}><Contact/></div>
        </MainContainer>
        </>
    )
}