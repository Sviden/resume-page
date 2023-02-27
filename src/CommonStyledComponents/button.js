import styled from "styled-components";

export const Btn = styled.button`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0.8rem 0;
min-width: 15%;
width: ${props => props.width ?  props.width : "fit-content"};
height: 1.8rem;
border: 2px solid #a2d2ff;
border-radius: 5px;
background-color: transparent;
cursor: pointer;
color: #061E47;
letter-spacing: 1px;
box-shadow: 1px 1px 15px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

&:hover{ 
 border: 2px solid #68A4F1;
border-radius: 5px;
background-color: transparent;
color: #a2d2ff;
a{
    color: #a2d2ff;
}

}

`