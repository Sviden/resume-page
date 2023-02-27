import styled from "styled-components";
import borderImg from "./detail-background-svg.jpg"

export const SectionBorder = styled.div`
border: 2px solid;
border-image-slice: 1;
border-image-source: linear-gradient(to left, #061E47, #68A4F1);
// border-image-source: url(${borderImg});
margin: 4rem 2rem;
padding: 2rem 2rem;
background-color:  #edf6f959;
@media only screen and (max-width: 500px) {
     padding: 1rem 1rem;
  }
`