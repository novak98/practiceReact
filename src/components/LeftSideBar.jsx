import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faArchway, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import styled, {css} from 'styled-components';

const StyledSideBar = styled.div`
display: flex;
flex-direction: column;
height: 100%;
border-right: 1px solid #e5e5e5;
top:0;
transition: width 350ms;
width:5rem;
z-index:5;
justify-content: center;  
background-color:white;
position:fixed;
left:0;

${({isOpen}) =>
isOpen && css`
  width: 20rem;
box-shadow: 0 72px 99px 0 rgba(95,95,95,0.24);
  &span {
    padding:15px;
  }
`
}
`
const StyledLink = styled.a`
  display:flex;
  color:#1e2649;
  text-decoration:none;
  align-items:center;
  justify-content:center;
  padding-top:10px;
  padding-bottom:10px;
  width:100%;
  border-radius:4px;
  &:hover {
    text-decoration:none;
    color:black;
    background-color:rgba(239,241,253,0.5);
  }

`





const LeftSideBar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (

  
  <StyledSideBar isOpen ={sidebar}>
          <div className="topLeftIcon">
    <FontAwesomeIcon icon={faAlignLeft} size={"2x"} onClick={showSidebar} />
    </div>
    <div className="left-icons">
        <div className="icons">
          <FontAwesomeIcon icon={faCoffee} size={"2x"} />
          {sidebar && 
          <StyledLink href="#">
            <span>
            Min profil 
          </span>
         </StyledLink>
          }
        </div>
       <div className="icons">
         <FontAwesomeIcon icon={faAdjust} size={"2x"} />
         {sidebar && <StyledLink href="#">
          <span>
            Min profil 
          </span>
         </StyledLink>
          }
       </div>
       <div className="icons">
         <FontAwesomeIcon icon={faAngry} size={"2x"} />
         {sidebar && <StyledLink href="#">
          <span>
            Min profil 
          </span>
         </StyledLink>
          }
       </div>
       <div className="icons">
         <FontAwesomeIcon icon={faArchway} size={"2x"} />
         {sidebar && <StyledLink href="#">
          <span>
            Min profil 
          </span>
         </StyledLink>
          }
       </div>
     </div>
     <div></div>
    </StyledSideBar>
  )};


export default LeftSideBar;