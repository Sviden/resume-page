import styled from "styled-components";
import photo from './photo.jpg';
import { useState } from "react";




const Wrapper = styled.div`
display: flex;
margin: 15vh 2rem 0 2rem;
padding: 4rem 2rem;
border: 2px solid;
border-image-slice: 1;
border-image-source: linear-gradient(to left, #061E47, #68A4F1);
background-color:  #edf6f959;
@media only screen and (max-width: 500px) {

  max-width: 100%;
  flex-direction: column;
  align-items: center;
}

`



const TextHolder = styled.div`
display: flex;
flex-direction: column;
padding: 6% 2% 0% 7%;
 .firstLine{
    letter-spacing: 2px;
    font-size: 1.2rem;
    font-weight: 300;
 }

 .secondLine{
    color: #a2d2ff;
    letter-spacing: 1.3px;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.3rem;
 }


 @media only screen and (max-width: 500px) {
  padding: 6% 2%;
}

   
`

const AnimatedText = styled.h1`
letter-spacing: 2px;
font-size: 1.2rem;
font-weight: 300;
color: hsl(0, 0%, 28%);
letter-spacing: 7px!important;
cursor: pointer;
  background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(0, 0%, 100%) 10%, hsl(0, 0%, 30%) 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s infinite linear;
  
  @keyframes shine {
   0% {
     background-position: -100px;
   }
   60% {
     background-position: 200px;
   }
   100% {
     background-position: 400px;
   }

`


const PhotoHolder = styled.div`
  
margin-left: 5%;
cursor: pointer;
img.photoScale{
    margin-top: 1rem;
    transform: scale(1.4);
    border: none;
    padding: 0px;
}

 img{
    width: 200px;
    box-shadow: 5px 5px 15px #ccc;
    border-radius: 5px;
 }
`




export function HeaderMainText(){
    
    const [photoClass, setPhotoClass] = useState(false);
  

    return(
        <>
        <Wrapper id="about">
        <PhotoHolder>
            <img src={photo} alt="photome" className={photoClass ? "photoScale" : ""} onClick={()=> setPhotoClass(!photoClass)}></img>
        </PhotoHolder>
        <TextHolder>
            <AnimatedText>Hello World,</AnimatedText>
            <span className="secondLine">I am Svitlana Denesiuk, FE developer</span>
            <span className="descriptionText">I have a keen eye for design flaws and a willingness to learn and make everything work to perfection,<br></br>
            currently looking for an employment opportunity where I can help improve, develop, build and design a product.</span>
        </TextHolder>
      </Wrapper>
 
        </>
    )
}







