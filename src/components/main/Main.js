import React from 'react'
import "./Main.css"
import Pic from "../../images/walking-man.png"
import LeftPanel from './LeftPanel/LeftPanel';
function Main() {
  return (
    <div className="main">
    <LeftPanel/>
      <img src={Pic} alt="walking man" className='walkingMan'/>
    </div>
  );
}

export default Main