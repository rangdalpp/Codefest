import "./Home.scss"
import React from "react"
import { Link, Redirect } from "react-router-dom"
import AddChat from './Bot'

function Home({loggedIn, isLoggedIn, userType}){
  
  return(
  <>
    <div>
      <section className="hero">
          <h2 className="hero-title top">Welcome to Start Young UK</h2>
          <h3 className="hero-title bottom">Scroll to learn more</h3>
      </section>

        <article>
          <h2>Introduction</h2>
          <p>Founded in 2020, Start Young UK is a new charity that provides mentoring, sponsorship and managed support for underprivileged children in of the UK, aged between 5-and 18. Start Young UK works with local communities to build a network of support for these children providing basic needs such as uniform, PE kit, support towards school trips and other basic needs. Within the UK alone over 25% of children are considered underprivileged, 70% of those are poor and 90% of those suffer from domestic abuse. We aim to change that!</p>
        </article>
        <article>
          <h2>How Can You Help?</h2>
          <p>If you are a school, join us today by clicking the School Registration button below, or if you already have an account you can log in using the button in the navigation bar. If you know a school who want to get involved with our Charity please click the Refer a School button. If you are a Sponsor or Buddy wanting to get involved, please sign up below to get entered into the scheme.</p>
        </article>

        <article className="home-user-buttons">
          {!loggedIn ? <button id="home-sign-up" className="home-button"><Link to="/login">Login</Link></button> : ""}
          <button id="home-refer-a-school" className="home-button"><Link to="/refer-a-school">Refer a School </Link></button>
          {loggedIn && userType === "SCHOOL" ? <button id="home-child-registration" className="home-button"><Link to="/register-a-child">Child Registration </Link></button> : ""}
          {loggedIn && userType === "ADMIN" ?<button id="home-charity-admin" className="home-button"><Link to="/charity-admin">Charity Admin</Link></button> : ""}

          {!loggedIn ? <button id="home-school-registration" className="home-button"><Link to="/register-a-school">School Registration </Link></button> : ""}
          {!loggedIn ? <button id="home-sign-up" className="home-button"><Link to="/sign-up">Sponsor & Buddy Sign-up</Link></button> : ""}
          {loggedIn && userType === "SCHOOL" ? <button id="home-child-registration" className="home-button"><Link to="/register-a-child">Child Registration </Link></button> : ""}
        </article>

        <article className="bot">
          {/* <AddChat/> */}
        </article>
    </div>
  </>
  )
}

export default Home;