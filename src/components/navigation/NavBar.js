import React from "react"
import { Link, Navigate } from "react-router-dom"
import "./NavBar.scss"

function NavBar({loggedIn, setLoggedIn}) {
  function handleLogout() {

    localStorage.removeItem("start-young-loginId")
    localStorage.removeItem("start-young-userType")
    setLoggedIn(false)
    window.location.reload()

  }

  return (
    <div className="nav-container">
      <div className="nav-bar">

        <nav className="links-nav-bar">
          <img id="nav-logo" style={{ width: "200px" }} src="https://static1.s123-cdn-static-a.com/uploads/5628538/400_filter_nobg_618e6671070c4.png" alt="Start Young UK logo" />
          <li className="nav-bar-li" id="nav-home-button"><Link className="nav-bar-li" to="/" >Home</Link></li>
        </nav>

        <nav className="user-buttons-nav">
          {!loggedIn ? <>
            <li className="user-not-logged-in nav-bar-li"><Link to="/login">Log In</Link></li>
            <li className="user-not-logged-in nav-bar-li"><Link to="/register-a-school">Register</Link></li>
          </>
          :
          <li className="user-logged-in nav-bar-li nav-log-out" onClick={handleLogout}>Log Out</li>
          }
            
        </nav>
      </div>
    </div>
    
  )
}

export default NavBar