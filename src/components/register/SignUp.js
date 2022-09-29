import { useState, useEffect } from "react"
import "./ReferASchool.scss"
import { Link, Navigate } from "react-router-dom"

function SignUp() {
  const [form, setForm] = useState({
    helpType: "",
    userId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    volunteerType: ""
  })
  const [isError, setIsError] = useState(false)
  const [tabStatus, setTabStatus] = useState([true, false, false, false])

  function handleChange(e) {
    console.log(e.target.id)
    console.log(e.target.value)
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  function handleButtonClick(e) {
    console.log(e.target.id)
    if (e.target.id === "B") {
      setTabStatus([true, false, false, false])
    } else if (e.target.id === "S") {
      setTabStatus([false, true, false, false])
    } else if (e.target.id === "V") {
      setTabStatus([false, false, true, false])
    } else if (e.target.id === "O") {
      setTabStatus([false, false, false, true])
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("https://start-young-app.azurewebsites.net/childRegistration", {
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
      <h1 id="login-heading">Sign Up</h1>

      <div className="divider"></div>
      <div className="form-container-buttons">
        <button className="button">Buddy</button>
        <button className="button">Volunteer</button>
        <button className="button">Supporter</button>
        <button className="button">Organisation</button>
      </div>
      <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>Buddy Details</h3>
            <div className="ref-school-address-three">
              <div className="form-field-container">
                <label htmlFor="firstName">Buddy First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Buddy First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="middleName">Buddy Middle Name</label>
                <input
                  type="text"
                  placeholder="Buddy Middle Name"
                  className="input home-textinput02"
                  id="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="lastName">Buddy Last Name</label>
                <input
                  type="text"
                  placeholder="Buddy Last Name"
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
                <label htmlFor="gender">Buddy Gender</label>
                <select
                  type="gender"
                  id="gender"
                  placeholder="Gender"
                  value={form.gender ? form.gender : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="transgender">TransGender</option>
                  <option value=" thirdgender">ThirdGender</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="email">Buddy Email</label>
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
                <label htmlFor="phone">Buddy Phone</label>
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
                <label htmlFor="typeOfHelp">Type Of Help You Can Provide</label>
                <select
                  type="typeOfHelp"
                  id="typeOfHelp"
                  placeholder="typeOfHelp"
                  value={form.typeOfHelp ? form.typeOfHelp : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="FINANCIAL">FINANCIAL</option>
                  <option value="UNIFORM">UNIFORM</option>
                  <option value="PE_KIT">PE_KIT</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="Type Of Volunteer">Type Of Volunteer</label>
                <select
                  type="volunteerType"
                  id="volunteerType"
                  placeholder="volunteerType"
                  value={form.volunteerType ? form.volunteerType : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="INDIVIDUAL">INDIVIDUAL</option>
                  <option value="ORGANISATION">ORGANISATION</option>
                </select>
              </div>

            </div>



          </div>

        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form >
      {/* <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>Volunteer Details</h3>
            <div className="ref-school-address-three">
              <div className="form-field-container">
                <label htmlFor="firstName">Volunteer First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Volunteer First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="middleName">Volunteer Middle Name</label>
                <input
                  type="text"
                  placeholder="Volunteer Middle Name"
                  className="input home-textinput02"
                  id="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="lastName">Volunteer Last Name</label>
                <input
                  type="text"
                  placeholder="Volunteer Last Name"
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
                <label htmlFor="gender">Volunteer Gender</label>
                <select
                  type="gender"
                  id="gender"
                  placeholder="Gender"
                  value={form.gender ? form.gender : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="email">Volunteer Email</label>
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
                <label htmlFor="phone">Volunteer Phone</label>
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
                <label htmlFor="typeOfHelp">Type Of Help You Can Provide</label>
                <select
                  type="typeOfHelp"
                  id="typeOfHelp"
                  placeholder="typeOfHelp"
                  value={form.typeOfHelp ? form.typeOfHelp : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="FINANCIAL">FINANCIAL</option>
                  <option value="UNIFORM">UNIFORM</option>
                  <option value="PE_KIT">PE_KIT</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="Type Of Volunteer">Type Of Volunteer</label>
                <select
                  type="volunteerType"
                  id="volunteerType"
                  placeholder="volunteerType"
                  value={form.volunteerType ? form.volunteerType : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="INDIVIDUAL">INDIVIDUAL</option>
                  <option value="ORGANISATION">ORGANISATION</option>
                </select>
              </div>

            </div>



          </div>

        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form >
      <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>Supporter Details</h3>
            <div className="ref-school-address-three">
              <div className="form-field-container">
                <label htmlFor="firstName">Supporter First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Buddy First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="middleName">Supporter Middle Name</label>
                <input
                  type="text"
                  placeholder="Buddy Middle Name"
                  className="input home-textinput02"
                  id="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="lastName">Supporter Last Name</label>
                <input
                  type="text"
                  placeholder="Buddy Last Name"
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
                <label htmlFor="gender">Supporter Gender</label>
                <select
                  type="gender"
                  id="gender"
                  placeholder="Gender"
                  value={form.gender ? form.gender : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="email">Supporter Email</label>
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
                <label htmlFor="phone">Supporter Phone</label>
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
                <label htmlFor="typeOfHelp">Type Of Help You Can Provide</label>
                <select
                  type="typeOfHelp"
                  id="typeOfHelp"
                  placeholder="typeOfHelp"
                  value={form.typeOfHelp ? form.typeOfHelp : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="FINANCIAL">FINANCIAL</option>
                  <option value="UNIFORM">UNIFORM</option>
                  <option value="PE_KIT">PE_KIT</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="Type Of Volunteer">Type Of Volunteer</label>
                <select
                  type="volunteerType"
                  id="volunteerType"
                  placeholder="volunteerType"
                  value={form.volunteerType ? form.volunteerType : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="INDIVIDUAL">INDIVIDUAL</option>
                  <option value="ORGANISATION">ORGANISATION</option>
                </select>
              </div>

            </div>



          </div>

        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form >
      <form className="refer-form" onSubmit={handleSubmit}>

        <div className="refer-form-container">

          <div className="refer-form-top">
            <h3>Organisation Details</h3>
            <div className="ref-school-address-three">
              <div className="form-field-container">
                <label htmlFor="firstName">Organisation First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Buddy First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="middleName">Organisation Middle Name</label>
                <input
                  type="text"
                  placeholder="Buddy Middle Name"
                  className="input home-textinput02"
                  id="middleName"
                  value={form.middleName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field-container">
                <label htmlFor="lastName">Organisation Last Name</label>
                <input
                  type="text"
                  placeholder="Buddy Last Name"
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
                <label htmlFor="gender">Organisation Gender</label>
                <select
                  type="gender"
                  id="gender"
                  placeholder="Gender"
                  value={form.gender ? form.gender : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="email">Organisation Email</label>
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
                <label htmlFor="phone">Organisation Phone</label>
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
                <label htmlFor="typeOfHelp">Type Of Help You Can Provide</label>
                <select
                  type="typeOfHelp"
                  id="typeOfHelp"
                  placeholder="typeOfHelp"
                  value={form.typeOfHelp ? form.typeOfHelp : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="FINANCIAL">FINANCIAL</option>
                  <option value="UNIFORM">UNIFORM</option>
                  <option value="PE_KIT">PE_KIT</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-field-container">
                <label htmlFor="Type Of Volunteer">Type Of Volunteer</label>
                <select
                  type="volunteerType"
                  id="volunteerType"
                  placeholder="volunteerType"
                  value={form.volunteerType ? form.volunteerType : ""}
                  onChange={handleChange}
                  required
                >
                  <option value=""></option>
                  <option value="INDIVIDUAL">INDIVIDUAL</option>
                  <option value="ORGANISATION">ORGANISATION</option>
                </select>
              </div>

            </div>



          </div>

        </div>



        {isError && <p className="error">Form Submission failed</p>}
        <button type="submit" id="refer-submit" className="submit-button">Submit</button>
      </form > */}
    </div>


  )
}

export default SignUp