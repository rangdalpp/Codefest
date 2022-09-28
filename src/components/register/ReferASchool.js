import {useState, useEffect} from "react"
import "./ReferASchool.scss"
import { Link, Navigate } from "react-router-dom"

function ReferASchool() {
  const [form, setForm] =useState({
    schoolName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postCode: "",
    country: "",
    city: "",
    schoolEmail: "",
    schoolPhone: "",
    refFirstName: "",
    refMiddleName: "",
    refLastName: "",
    refEmail: ""
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

      })
      .catch((err) => {
        console.error("REFER SCHOOL FETCH ERROR", err)
        setIsError(true)
      })
  }

  return (
    <div className="form-container">
      <h1 id="login-heading">Refer A School</h1>
      <div className="divider"></div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="Login Id">Login Id</label>
        <input
          type="text"
          id="loginId"
          placeholder="loginId"
          value={form.schoolName}
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
    </div >
  )
}

export default ReferASchool