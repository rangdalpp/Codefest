import React from "react"
import { Link, Redirect } from "react-router-dom"
import "./NavBar.scss"

function NavBar() {

  return (
    <div className="nav-container">
      <div className="nav-bar">

        <nav className="links-nav-bar">
          <img id="nav-logo" style={{ width: "200px" }} src="https://static1.s123-cdn-static-a.com/uploads/5628538/400_filter_nobg_618e6671070c4.png" alt="Start Young UK logo" />
          <li className="nav-bar-li" id="nav-home-button"><Link className="nav-bar-li" to="/" >Home</Link></li>
        </nav>

        <nav className="user-buttons-nav">
            <li className="user-not-logged-in nav-bar-li"><Link to="/login">Log In</Link></li>
            <li className="user-not-logged-in nav-bar-li"><Link to="/register">Register</Link></li>
        </nav>
      </div>
    </div>
  )
}

export default NavBar