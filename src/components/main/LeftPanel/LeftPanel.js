import React from 'react'
import "./LeftPanel.css"
import Logo from "../../../images/MetalCloud - Horizontal Logo.png"
function LeftPanel() {
  return (
    <div className="leftPanel">
      <img src={Logo} alt="logo" className="logo" />
      <div className="heading">Hold On!</div>
      <div className="subHeading">
        You’re are being redirected to
        <span className="blue"> nowpurchase.com</span>
      </div>
      <div className="clickHere">
        if you are not being redirected in 10 seconds<span className='red'> click here</span>
      </div>
    </div>
  );
}

export default LeftPanel