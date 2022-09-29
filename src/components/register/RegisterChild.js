import { useState, useEffect } from "react"
import "./ReferASchool.scss"
import { Link, Navigate } from "react-router-dom"

function ReferAChild() {
  const [form, setForm] = useState({
    typeOfHelp: "",
    userId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: ""
  })
  const [isError, setIsError] = useState(false)

  function handleChange(e) {
    console.log(e.target.id)
    console.log(e.target.value)
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://start-young-app.azurewebsites.net/referSchool", {
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
        // data.referalId
      })
      .catch((err) => {
        console.error("Registar child FETCH ERROR", err)
        setIsError(true)
      })
  }

  return (
    <div className="form-container">
      <h1 id="login-heading">Register Child</h1>
      <div className="divider"></div>
      <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>Child Details</h3>
          <div className="ref-school-address-three">
            <div className="form-field-container">
              <label htmlFor="schoolName">Child First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Child First Name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="schoolEmail">Child Middle Name</label>
              <input
                type="text"
                placeholder="Child Middle Name"
                className="input home-textinput02"
                id="middleName"
                value={form.middleName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="schoolPhone">Child Last Name</label>
              <input
                type="text"
                placeholder="Child Last Name"
                className="input home-textinput02"
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="ref-school-address-three">
            <div className="form-field-container">
              <label htmlFor="schoolName">Child Gender</label>
              <select
                type="gender"
                id="gender"
                placeholder="Gender"
                value={form.gender ? form.gender : ""}
                onChange={handleChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-field-container">
              <label htmlFor="schoolEmail">Child Email</label>
              <input
                type="text"
                placeholder="Email"
                className="input home-textinput02"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="schoolPhone">Child Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="input home-textinput02"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="ref-school-address-three">
            <div className="form-field-container">
              <label htmlFor="schoolName">TypeOfHelp</label>
              <select
                type="typeOfHelp"
                id="typeOfHelp"
                placeholder="typeOfHelp"
                value={form.typeOfHelp ? form.typeOfHelp : ""}
                onChange={handleChange}
                required
              >
                <option>FINANCIAL</option>
                <option>UNIFORM</option>
                <option>PE_KIT</option>
                <option>Other</option>
              </select>
            </div>
            
          </div>
            
            
            
          </div>
          
        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form >
    </div >
  )
}

export default ReferAChild