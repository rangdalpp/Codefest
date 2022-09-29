import { useState, useEffect } from "react"
import "./ReferASchool.scss"
import { Link, Navigate } from "react-router-dom"

function ReferASchool() {
  const [form, setForm] = useState({
    schoolName: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    postCode: "",
    country: "",
    city: "",
    schoolEmail: "",
    schoolPhone: "",
    title:"",
    firstName: "",
    middleName: "",
    lastName: "",
    designation: "",
    email: "",
    phoneNumber:""
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
        console.error("REFER SCHOOL FETCH ERROR", err)
        setIsError(true)
      })
  }

  return (
    <div className="form-container">
      <h1 id="login-heading">Refer A School</h1>
      <div className="divider"></div>
      <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>School Details</h3>
            <div className="ref-school-address-three">
            <div className="form-field-container">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                placeholder="School Name"
                value={form.schoolName}
                onChange={handleChange}
                required
              />
            </div>
              <div className="form-field-container">
              <label htmlFor="schoolEmail">School Email</label>
              <input
                type="text"
                placeholder="Email"
                className="input home-textinput02"
                id="schoolEmail"
                value={form.schoolEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field-container">
              <label htmlFor="schoolPhone">School Phone</label>
              <input
                type="text"
                placeholder="School Phone"
                className="input home-textinput02"
                id="schoolPhone"
                value={form.schoolPhone}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="form-field-container-address">
              <h3>School Address</h3>
              <div className="ref-school-address-lines">
                <div className="form-field-container">
                  <label htmlFor="addressLine1">Address Line 1</label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="input home-textinput02"
                    id="addressLine1"
                    value={form.addressLine1}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="addressLine2">Address Line 2</label>
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="input home-textinput02"
                    id="addressLine2"
                    value={form.addressLine2}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="addressLine3">Address Line 3</label>
                  <input
                    type="text"
                    placeholder="Address Line 3"
                    className="input home-textinput02"
                    id="addressLine3"
                    value={form.addressLine3}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="ref-school-address-two">
                <div className="form-field-container">
                  <label htmlFor="postCode">Post Code</label>
                  <input
                    type="text"
                    placeholder="Post Code"
                    className="input home-textinput02"
                    id="postCode"
                    value={form.postCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="County">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="input home-textinput02"
                    id="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className="input home-textinput02"
                    id="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            
          </div>
          <div className="refer-form-bottom">
            <h3>Referrer Information</h3>
            <div className="form-field-container">
              <div className="ref-info">
              <div className="form-field-container">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    placeholder="Referrer Title"
                    className="input home-textinput02"
                    id="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    placeholder="Referrer First Name"
                    className="input home-textinput02"
                    id="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="middleName">Middle Name</label>
                  <input
                    type="text"
                    placeholder="Referrer Middle Name"
                    className="input home-textinput02"
                    id="middleName"
                    value={form.middleName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    placeholder="Referrer Last Name"
                    className="input home-textinput02"
                    id="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="designation">Designation</label>
                  <input
                    type="text"
                    placeholder="Referrer Designation"
                    className="input home-textinput02"
                    id="designation"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="refEmail">Email</label>
                  <input
                    type="text"
                    placeholder="Referrer Email"
                    className="input home-textinput02"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-field-container">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="phone"
                    placeholder="Referrer Phone Number"
                    className="input home-textinput02"
                    id="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    required />
                </div>
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

export default ReferASchool