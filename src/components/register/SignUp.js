import {useState, useEffect} from "react"
import "./RegisterSchool.scss"
import { Link, Navigate } from "react-router-dom"

function SignUp() {
  const [form, setForm] =useState({
    schoolName: "",
    schoolAddressLine1: "",
    schoolAddressLine2: "",
    schoolAddressLine3: "",
    postcode: "",
    county: "",
    city: "",
    schoolEmail: "",
    schoolPhone: "",
    referrerFirstName: "",
    referrerMiddleName: "",
    referrerEmail: ""
  })
  const [isError, setIsError] = useState(false)
  const [introducerCode, setIntroducerCode] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("", {
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

        setIntroducerCode(data.introducerCode)
      })
      .catch((err) => {
        console.error("REFER SCHOOL FETCH ERROR", err)
        setIsError(true)
      })
  }

  return (
    <div className="form-container">
      <h1 id="login-heading">Sign Up</h1>
      <div className="divider"></div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="Login Id">Login Id</label>
        <input
          type="text"
          id="loginId"
          placeholder="loginId"
          value={form.loginId}
          onChange={handleChange}
          required
        />

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

        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {introducerCode ? <p> Introducer Code Generated : {introducerCode}</p> : ""}
    </div >
  )
}

export default SignUp