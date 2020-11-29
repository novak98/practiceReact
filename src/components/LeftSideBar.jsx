import React from 'react';
import { Container, Col } from 'react-grid-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faArchway, faAlignLeft } from '@fortawesome/free-solid-svg-icons'


const LeftSideBar = () => (

  <div className="side-bar">
          <div className="topLeftIcon">
    <FontAwesomeIcon icon={faAlignLeft} size={"2x"} />
    </div>
    <div className="left-icons">
        <div className="icons">
          <FontAwesomeIcon icon={faCoffee} size={"2x"} />
        </div>
       <div className="icons">
         <FontAwesomeIcon icon={faAdjust} size={"2x"} />
       </div>
       <div className="icons">
         <FontAwesomeIcon icon={faAngry} size={"2x"} />
       </div>
       <div className="icons">
         <FontAwesomeIcon icon={faArchway} size={"2x"} />
       </div>
     </div>
     <div></div>
    </div>
);


export default LeftSideBar;