import { useState, useEffect } from "react"
import "./RegisterSchool.scss"
import { Link, Navigate } from "react-router-dom"

function RegisterSchool1() {
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
    schoolDescription: "",
    estalishedDate: "",
    registrationDate: "",
    countryOfRegistration: "",
    referralId: "",
    childrenCount: "",
    childrenInNeedCount: "",
    title1: "",
    firstName1: "",
    middleName1: "",
    lastName1: "",
    designation1: "",
    email1: "",
    phoneNumber1: "",
    title2: "",
    firstName2: "",
    middleName2: "",
    lastName2: "",
    designation2: "",
    email2: "",
    phoneNumber2: "",
    helpType: ""
  })
  const [isError, setIsError] = useState(false)
  const [introducerCode, setIntroducerCode] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  function handleClick(e) {

  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://start-young-app.azurewebsites.net/registerSchool", {
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
      <h1 id="login-heading">Register A School</h1>
      <div className="divider"></div>
      <form className="register-school-form" onSubmit={handleSubmit}>

        <div className="register-school-form-container">
          {/* Need to add some state that tracks page (page 2 and 3 hidden when loaded, when next pressed validates all fields are present and valid, back and next buttons just hide the divs containing the pages) */}
          <div className="register-school-form-page-1">
            <div className="register-school-page-1-top">
              <div className="register-school-page-1-left">
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
                  <label htmlFor="schoolName">Brief Description Of School</label>
                  <input
                    type="text"
                    id="schoolDescription"
                    placeholder="School Desciption"
                    value={form.schoolDescription}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="establishedDate">School Established Date</label>
                  <input
                    type="date"
                    id="estalishedDate"
                    placeholder="School Established Date"
                    value={form.estalishedDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="registrationDate">Date of Registration</label>
                  <input
                    type="date"
                    id="registrationDate"
                    placeholder="Date of Registration"
                    value={form.registrationDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="registrationDate">Country of Registration</label>
                  <input
                    type="dropdown"
                    id="countryOfRegistration"
                    placeholder="Country of Registration"
                    value={form.countryOfRegistration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field-container">
                  <label htmlFor="referralId">Introducer Code</label>
                  <input
                    type="text"
                    id="referralId"
                    placeholder="Introducer Code"
                    value={form.referralId}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="register-school-page-1-right">
                <div className="form-field-container">
                  <label htmlFor="schoolPhone">School Registered Number</label>
                  <input
                    type="tel"
                    id="schoolPhone"
                    placeholder="School Registered Number"
                    value={form.schoolPhone}
                    onChange={handleChange}
                    required
                  />
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
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        placeholder="country"
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
            </div>

            <div className="register-school-page-1-bottom">
              <div className="register-school-page-1-bottom-contact-pref">
                <h3>Contact Preferences</h3>
                <div>
                  <div className="form-field-container-reverse-row">
                    <label for="sms">SMS</label>
                    <input type="checkbox" className="contact-pref-box" id="sms" name="sms" value="sms" />
                  </div>
                  <div className="form-field-container-reverse-row">
                    <label for="call">Call</label>
                    <input type="checkbox" className="contact-pref-box" id="call" name="call" value="call" />
                  </div>
                  <div className="form-field-container-reverse-row">
                    <label for="email">Email</label>
                    <input type="checkbox" className="contact-pref-box" id="email" name="email" value="email" />
                  </div>
                </div>
              </div>
              <div className="register-school-page-1-bottom-buttons">
                <button type="button" onClick={handleClick}>{"Next ->"}</button>
              </div>
            </div>
          </div>

          <div className="register-school-form-page-2">
            <div className="register-school-page-2-top">
              <h3>First Contact</h3>
              <div className="register-school-page-2-left">
                <div className="form-field-container">
                  <div className="ref-info">
                    <div className="form-field-container">
                      <label htmlFor="firstContTitle">Title</label>
                      <input
                        type="text"
                        placeholder="First Contact Title"
                        className="input home-textinput02"
                        id="title1"
                        value={form.title1}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContFirstName">First Name</label>
                      <input
                        type="text"
                        placeholder="First Contact First Name"
                        className="input home-textinput02"
                        id="firstName1"
                        value={form.firstName1}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContMiddleName">Middle Name</label>
                      <input
                        type="text"
                        placeholder="First Contact Middle Name"
                        className="input home-textinput02"
                        id="middleName1"
                        value={form.middleName1}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContLastName">Last Name</label>
                      <input
                        type="text"
                        placeholder="First Contact Last Name"
                        className="input home-textinput02"
                        id="lastName1"
                        value={form.lastName1}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContDesignation">Designation</label>
                      <input
                        type="text"
                        placeholder="First Contact Designation"
                        className="input home-textinput02"
                        id="designation1"
                        value={form.designation1}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContEmail">Email</label>
                      <input
                        type="text"
                        placeholder="First Contact Email"
                        className="input home-textinput02"
                        id="email1"
                        value={form.email1}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="firstContPhoneNumber">Phone Number</label>
                      <input
                        type="phone"
                        placeholder="First Contact Phone Number"
                        className="input home-textinput02"
                        id="phoneNumber1"
                        value={form.phoneNumber1}
                        onChange={handleChange}
                        required />
                    </div>
                  </div>
                </div>
              </div>
              <h3>Second Contact</h3>
              <div className="register-school-page-2-right">
                <div className="form-field-container">
                  <div className="ref-info">
                    <div className="form-field-container">
                      <label htmlFor="secondContTitle">Title</label>
                      <input
                        type="text"
                        placeholder="Second Contact  Title"
                        className="input home-textinput02"
                        id="title2"
                        value={form.title2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContFirstName">First Name</label>
                      <input
                        type="text"
                        placeholder="Second Contact  First Name"
                        className="input home-textinput02"
                        id="firstName2"
                        value={form.firstName2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContMiddleName">Middle Name</label>
                      <input
                        type="text"
                        placeholder="Second Contact  Middle Name"
                        className="input home-textinput02"
                        id="middleName2"
                        value={form.middleName2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContLastName">Last Name</label>
                      <input
                        type="text"
                        placeholder="Second Contact  Last Name"
                        className="input home-textinput02"
                        id="lastName2"
                        value={form.lastName2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContDesignation">Designation</label>
                      <input
                        type="text"
                        placeholder="Second Contact  Designation"
                        className="input home-textinput02"
                        id="designation2"
                        value={form.designation2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContEmail">Email</label>
                      <input
                        type="text"
                        placeholder="Second Contact  Email"
                        className="input home-textinput02"
                        id="email2"
                        value={form.email2}
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="form-field-container">
                      <label htmlFor="secondContPhoneNumber">Phone Number</label>
                      <input
                        type="phone"
                        placeholder="Second Contact Phone Number"
                        className="input home-textinput02"
                        id="phoneNumber2"
                        value={form.phoneNumber2}
                        onChange={handleChange}
                        required />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="register-school-page-2-bottom">
              <button type="button" onClick={handleClick}>{"<- Back"}</button>
              <button type="button" onClick={handleClick}>{"Next ->"}</button>
            </div>

          </div>
          <div className="register-school-form-page-3">
            <div className="register-school-page-3-top">
              <div className="form-field-container">
                <label htmlFor="childrenCount">Number of Children In School</label>
                <input
                  type="number"
                  placeholder="Number of Children In School"
                  className="input home-textinput02"
                  id="childrenCount"
                  value={form.childrenCount}
                  onChange={handleChange}
                  required />
              </div>
              <div className="register-school-page-3-1">
                <div className="form-field-container">
                  <label htmlFor="helpType">
                    Type of Help Required</label>
                  <select
                    type="helpType"
                    id="helpType"
                    placeholder="Help Type"
                    value={form.helpType ? form.helpType : ""}
                    onChange={handleChange}
                    required
                  >
                    <option>Financial</option>
                    <option>Uniform</option>
                    <option>PE Kit</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-field-container">
                  <label htmlFor="childrenInNeedCount">Number of Children In Need of Help</label>
                  <input
                    type="number"
                    placeholder="Number of Children In Need of Help"
                    className="input home-textinput02"
                    id="childrenInNeedCount"
                    value={form.childrenInNeedCount}
                    onChange={handleChange}
                    required />
                </div>
              </div>
              <div className="register-school-page-3-2">
              <div className="form-field-container">
                  <label htmlFor="helpType">
                    Type of Help Required</label>
                  <select
                    type="helpType"
                    id="helpType"
                    placeholder="Help Type"
                    value={form.helpType ? form.helpType : ""}
                    onChange={handleChange}
                    required
                  >
                    <option>Financial</option>
                    <option>Uniform</option>
                    <option>PE Kit</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-field-container">
                  <label htmlFor="childrenInNeedCount">Number of Children In Need of Help</label>
                  <input
                    type="number"
                    placeholder="Number of Children In Need of Help"
                    className="input home-textinput02"
                    id="childrenInNeedCount"
                    value={form.childrenInNeedCount}
                    onChange={handleChange}
                    required />
                </div>
              </div>
              <div className="register-school-page-3-3">
              <div className="form-field-container">
                  <label htmlFor="helpType">
                    Type of Help Required</label>
                  <select
                    type="helpType"
                    id="helpType"
                    placeholder="Help Type"
                    value={form.helpType ? form.helpType : ""}
                    onChange={handleChange}
                    required
                  >
                    <option>Financial</option>
                    <option>Uniform</option>
                    <option>PE Kit</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-field-container">
                  <label htmlFor="childrenInNeedCount">Number of Children In Need of Help</label>
                  <input
                    type="number"
                    placeholder="Number of Children In Need of Help"
                    className="input home-textinput02"
                    id="childrenInNeedCount"
                    value={form.childrenInNeedCount}
                    onChange={handleChange}
                    required />
                </div>
              </div>
              <div className="register-school-page-3-4">
              <div className="form-field-container">
                  <label htmlFor="helpType">
                    Type of Help Required</label>
                  <select
                    type="helpType"
                    id="helpType"
                    placeholder="Help Type"
                    value={form.helpType ? form.helpType : ""}
                    onChange={handleChange}
                    required
                  >
                    <option>Financial</option>
                    <option>Uniform</option>
                    <option>PE Kit</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-field-container">
                  <label htmlFor="childrenInNeedCount">Number of Children In Need of Help</label>
                  <input
                    type="number"
                    placeholder="Number of Children In Need of Help"
                    className="input home-textinput02"
                    id="childrenInNeedCount"
                    value={form.childrenInNeedCount}
                    onChange={handleChange}
                    required />
                </div>
              </div>
              <div className="register-school-page-3-right">
                  <p>DATA PRIVACY DISCLAIMER: INSERT HERE</p>
              </div>
            </div>
            <div className="register-school-page-3-bottom">
              <button type="button" onClick={handleClick}>{"<- Back"}</button>
              <button type="submit">Submit</button>
            </div>

          </div>

        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form >
    </div >
  )
}

export default RegisterSchool1