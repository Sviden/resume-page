import { useState, useRef } from "react";
import axios from "axios"
import { Header } from "../CommonStyledComponents/headerStyle"
import { SectionBorder } from "../CommonStyledComponents/sectionBorder";
import { AiOutlineLinkedin, AiOutlineInstagram,AiOutlineFacebook } from 'react-icons/ai';
import styled from "styled-components"
import { Btn } from "../CommonStyledComponents/button";

const ContactForm = styled.div`
display: flex;
width: 100%;
justify-content: center;

  form{
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    margin-bottom: 3rem;
    input{
        width: 100%;
        margin-bottom: 1.5rem;
        height: 2rem;
        border: 2px  solid #a2d2ff;
        border-radius: 10px;
        padding: 0.3rem;
    }
    textarea{
        width: 100%;
        height: 6rem;
        border: 2px  solid #a2d2ff;
        border-radius: 10px;
        padding: 0.4rem;

    }
}
@media only screen and (max-width: 500px) {
    form{
      width:90%;
    }
}
`

const ContactInfo = styled.div`
.mediaHolder{
    display: flex;
    gap: 1rem;
    
    a{
         color: black;
         font-size: 1.2rem;
         
    }
    a:hover{
        color: #a2d2ff;
    }
   
 }

 .contactSection{
  margin: 4px;
 }

 @media only screen and (max-width: 500px) {
     width: 100%;
}
`


export function Contact(){
   const [buttonText, setBtnText] = useState("Send");
   const [inputData, setInputData] = useState({
    name: "",
    mail: "",
    message: ""
   })
    const nameRef = useRef();
    const emailRef = useRef();
    const msgRef = useRef();
     
    const onSubmit= async(e)=>{

        e.preventDefault();
  
        const sendMsg = await axios.post('http://localhost:3000/sendmsg', inputData);
   
      if(sendMsg.data === "message sent"){
        setBtnText("Got it, thanks!")
          setTimeout(()=>{
            setBtnText("Send")
          }, 4000)
        
          setInputData(inputData => (
            { ...inputData,
                name: "",
                mail: "",
                message: ""
            }))
      }else{
        setBtnText("Something went wrong :(")
        setTimeout(()=>{
          setBtnText("Send")
        }, 4000)
      }
      console.log(sendMsg)

      
    }
   

    return(
        <SectionBorder>
       <Header>Contact</Header>
            <ContactForm>
              <form onSubmit={(e) => onSubmit(e)}>
                    <input value={inputData.name} type="text" required placeholder="Name" onChange={(e) => setInputData(inputData =>( {...inputData, name: e.target.value}))}></input>
                    <input value={inputData.mail}  type="email" required placeholder="Email"  onChange={(e) => setInputData(inputData =>( {...inputData, mail: e.target.value}))}></input>
                    <textarea value={inputData.message}  placeholder="Message..."  onChange={(e) => setInputData(inputData =>( {...inputData, message: e.target.value}))}></textarea>
                <Btn width={"70%"} type="submit">{buttonText}</Btn>
              </form>

            </ContactForm>    
          <ContactInfo>
            <div className="contactSection">Call me: 0543124282</div>
            <div className="contactSection">Email me: svitlanadenesiuk@gmail.com</div>
            <div className="mediaHolder contactSection">
                Let's be friends:
                <a href="https://www.linkedin.com/in/svitlana-denesiuk/" target="_blank" rel="noreferrer"><AiOutlineLinkedin></AiOutlineLinkedin></a>
                <a href="https://www.instagram.com/svitlanadenesiuk/" target="_blank" rel="noreferrer"><AiOutlineInstagram></AiOutlineInstagram></a>
                <a href="https://www.facebook.com/svitlana.denesiuk.5/" target="_blank" rel="noreferrer"><AiOutlineFacebook></AiOutlineFacebook></a>
            </div>

          </ContactInfo>
        </SectionBorder>
    )


}