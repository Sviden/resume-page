import styled from "styled-components"
import { SectionBorder } from "../CommonStyledComponents/sectionBorder";
import { Header } from "../CommonStyledComponents/headerStyle";

const Container = styled.div`
 font-size: 1rem;
 
 .subheader{
   color: #a2d2ff;
   font-weight: 600;
 }


`



const JobDescription = styled.div`


`



export function Experience(){

    return(
       <>
       <SectionBorder id="experience">
       <Container >
         <Header>Experience</Header>
        <div>
       <p className="posName"><span className=" subheader">Position: </span>Full Stack Engineer</p> 
       <p className="company"><span className="subheader">Company: </span>TruffleLive,  (Jun 2022 - Nov 2022)</p>
      <p className="place"><span className=" subheader">Place: </span>Tel Aviv, Israel (remote) </p>
      <JobDescription>Developing TruffleLive’s new translation management system website from scratch. <br/>
       Working closely with company stakeholders and system users to adjust and plan the system to their needs.<br/>
       Mobile friendly.<br/>
       Multi environment support for use with different repositories and ENV sync support to show and copy translations. <br/>
       User friendly search(with filters and free text) and editing options for search results.<br/>
       Developing TruffleLive’s new translation management system website from scratch <br/>
       Working closely with company stakeholders and system users to adjust and plan the system to their needs. <br/>
       Mobile friendly. <br/>
       Multi environment support for use with different repositories and ENV sync support to show and copy translation.<br/>
       User friendly search(with filters and free text) and editing options for search results. 
      <p className="stack"><span>Stack: </span>React.js · styled-components · MongoDB · Cascading Style Sheets (CSS) · Node.js · JavaScript · HTML</p> 
      </JobDescription>
        </div>
       </Container>
       </SectionBorder>
       </>
    )
}