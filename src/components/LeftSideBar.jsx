import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faAngry } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { faArchway, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData.jsx';
import { IconContext } from 'react-icons';



const LeftSideBar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (

  
  <div className="side-bar">
          <div className="topLeftIcon">
    <FontAwesomeIcon icon={faAlignLeft} size={"2x"} onClick={showSidebar} />
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <div to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
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
  )};


export default LeftSideBar;