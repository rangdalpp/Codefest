import {useState, useEffect} from "react"
import "./Login.scss"
import { Link, Navigate } from "react-router-dom"

function Login({ loggedIn, setLoggedIn, loginId, setLoginId }) {
  const [form, setForm] =useState({
    loginId: "",
    password: "",
    userType: ""
  })
  const [isError, setIsError] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://start-young-app.azurewebsites.net/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error()
        }
        return res.json()
      })
      .then((data) => {

        localStorage.setItem("start-young-loginId", data.loginId)
        localStorage.setItem("start-young-userType", data.userType)

        setLoginId(data.loginId)
        setLoggedIn(true)
      })
      .catch((err) => {
        console.error("LOGIN FETCH ERROR", err)
        setIsError(true)
      })
  }

  return (
    <div className="form-container">
      <h1 id="login-heading">Log In</h1>
      <div className="divider"></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field-container">
          <label htmlFor="loginId">Login Id</label>
          <input
            type="text"
            id="loginId"
            placeholder="Login Id"
            value={form.loginId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field-container">
          <label htmlFor="password">
          Password  </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field-container">
          <label htmlFor="userSelect">
            User Type  </label>
          <select
            type="userType"
            id="userType"
            placeholder="User Type"
            value={form.userType ? form.userType : ""}
            onChange={handleChange}
            required
          >
            <option>School</option>
            <option>Charity Admin</option>
          </select>
        </div>
        <div className="form-field-container">
          
        </div>

        {isError && <p className="error">Login failed</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <p className="form-links">Not got an account?</p>
      <Link id="not-nav" to="/register" className="form-links"> Register </Link>
      {loggedIn && loginId ? <Navigate to="/" /> : console.log("login not yet occured")}
    </div >
  )
}

export default Login