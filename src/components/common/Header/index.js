import React from "react";

const Header=()=>{
  return (
    <nav style={{background:"#2196f3"}}>
    <div className="nav-wrapper">
      <a href="" className="brand-logo left"><img alt="logo" src="http://www.perpule.com/img/Perpule_logo_inverse_name.png" width="150px"/>
      </a>
      <ul id="nav-mobile" className="right">
        <li style={{marginRight:"14px"}}>Hi, Murali</li>
        <li style={{marginRight:"28px"}}><i className="material-icons">account_circle</i></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;
