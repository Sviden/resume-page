import styled from "styled-components"
import {useState} from "react" 
import { SectionBorder } from "../CommonStyledComponents/sectionBorder"
import { Header } from "../CommonStyledComponents/headerStyle";
import { FiExternalLink } from 'react-icons/fi';
import { BsLink45Deg } from 'react-icons/bs';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { exchPhotoArr } from "./photoImport/photoImport";
import { toDoPhotoArr } from "./photoImport/photoImport";
import { Btn } from "../CommonStyledComponents/button"; 

const ProjectsWrapper = styled.div`
.nameAndBtnSection{
}
.projTitle{
    font-size: 1.3rem;
    color: #a2d2ff;
}
a{
    text-decoration: none;
    color: #061E47;
}
a:hover{
    color: #a2d2ff;
}
   


`

const DescriptionAndPhotoSec = styled.div`
display: grid;
height: 50%;
grid-template-columns: 1fr 1fr;
margin-bottom: 2rem;
.photoSection{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;
    img{
        width: 80%;
        height: 80%;
    }
    .arrow{
        cursor: pointer;
        font-size: 1.5rem;
    }
}

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  
`



export function Projects(){
    const [photoIndex, setPhotoIndex] = useState(0);
    const [toDoPhotoIndex, setToDoPhotoIndex] = useState(0);

     const arrowHandler =(element, n)=>{
       if(element === "exchange"){   
        if(photoIndex < exchPhotoArr.length && photoIndex >= 0){
            if(photoIndex === exchPhotoArr.length - 1 && photoIndex + n === exchPhotoArr.length){
                setPhotoIndex(0);
            }else if(photoIndex === 0 && photoIndex + n < 0){
                setPhotoIndex(exchPhotoArr.length -1)
            }
            else{
              setPhotoIndex((curr) => {return curr + n < 5 && curr + n >= 0 ? curr + n : curr});

            }
        }
        }

        if(element=== "todo"){
            if(photoIndex < toDoPhotoArr.length && photoIndex >= 0){
                if(photoIndex === toDoPhotoArr.length - 1 && photoIndex + n === toDoPhotoArr.length){
                    setToDoPhotoIndex(0);
                }else if(photoIndex === 0 && photoIndex + n < 0){
                    setToDoPhotoIndex(toDoPhotoArr.length -1)
                }
                else{
                  setToDoPhotoIndex((curr) => {return curr + n < 5 && curr + n >= 0 ? curr + n : curr});
    
                }
            }
        }
     }

     
    return(
        <>
        <SectionBorder id="projects">
        <Header>Projects</Header>
        <ProjectsWrapper>
            <div className="nameAndBtnSection">
         <div className="projTitle">
            Demo Exchange App
         </div>
         <Btn><a href="https://svidenexchangeapp.netlify.app/" target="_blank" rel="noreferrer">Show project </a><FiExternalLink/></Btn>
        </div>
         <DescriptionAndPhotoSec>
            <div className="description">
            Demo project for an exchange info platform, built using React.js, Node.js, MongoDB, CSS,<br/>
            hosted on netlify( front-end) and heroku (back-end).
            Responsive, single page app, built using context, internal and external APIs, <br/>
            illustrates exchange fluctuations in real time with gold\silver fluctuation graph and exchange rates for other currencies based on USD\EUR.<br/>
             Data Server with real and simulated data to overcome free API limitations. <br/>
           <a href="https://github.com/Sviden/ExchangeAppBack"  target="_blank" rel="noreferrer">GitHub back-end <BsLink45Deg/> </a><br/>
           <a href="https://github.com/Sviden/ExchangeAppFront"  target="_blank" rel="noreferrer">GitHub front <BsLink45Deg/></a>  <br/>
            </div>
            <div className="photoSection">
           < IoIosArrowBack className="arrow"  style={photoIndex === 0 ? {color: "gray"} : {color: "black"}} onClick={() => arrowHandler("exchange",-1)}/>  <img src={exchPhotoArr[photoIndex]} alt="eaxchapp"></img> <IoIosArrowForward className="arrow" onClick={() => arrowHandler("exchange",+1)}  style={photoIndex === 4 ? {color: "gray"} : {color: "black"}}/>
            </div>
         </DescriptionAndPhotoSec>
            <div className="nameAndBtnSection">
         <div className="projTitle">
            To Do App
         </div>
         <Btn><a href="https://svidentodoapp.netlify.app/alltasks" target="_blank" rel="noreferrer">Show project </a><FiExternalLink/></Btn>
        </div>
         <DescriptionAndPhotoSec>
            <div className="description">
                    Responsive React application for a To-do website built using React.js, Node.js, MongoDB, CSS.
                    With user registration\login. Tasks Per user with the ability to Add\Delete\Update different tasks.. <br/>
                <a href="https://github.com/Sviden/ToDoAppBack"  target="_blank" rel="noreferrer">GitHub back-end <BsLink45Deg/> </a><br/>
                <a href="GitHub front: https://github.com/Sviden/ToDoAppFront"  target="_blank" rel="noreferrer">GitHub front <BsLink45Deg/></a>  <br/>
            </div>
            <div className="photoSection">
                < IoIosArrowBack className="arrow" onClick={() => arrowHandler("todo",-1)}/>  
                <img src={toDoPhotoArr[toDoPhotoIndex]} alt="eaxchapp"></img> 
                <IoIosArrowForward className="arrow" onClick={() => arrowHandler("todo", +1)}/>
            </div>
         </DescriptionAndPhotoSec>

        </ProjectsWrapper>
        </SectionBorder>
        </>
    )
}