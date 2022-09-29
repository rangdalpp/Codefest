import { useState, useEffect } from "react"
import "./ReferASchool.scss"
import { Link, Navigate } from "react-router-dom"

function CharityAdmin() {
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
    
    <table class="GeneratedTable" id="GeneratedTable">
            <tbody>
		<tr>
                <th>Serial No.</th>
                <th>Registration ID</th>
		<th>School Name</th>
                <th>Registration Date</th>
		<th>Registration Status</th>
               
            </tr>
<tr>
                <td>12345</td>
                <td>32456</td>
		<td>Saont Mary School</td>
                <td>02-05-1976</td>
		<td>Open</td>
               
            </tr>
<tr>
                <td>45678</td>
                <td>90897</td>
		<td>Abbey College</td>
                <td>12-04-1987</td>
		<td>Accept</td>
               
            </tr>
 	</tbody>
 
            <tbody>
		
               <tr>
                  <td><b>School Name</b></td>
                  <td><input type="text" name="schoolName"  maxlength="100"/></td>
		<td><b>School Registered Number</b></td>
                  <td> <input type="text" name="regisNum"  maxlength="100"/></td>
               </tr>
               <tr>
		<td><b>Brief Description Of School</b></td>
                  <td><textarea  name="schooldesc" rows="4" ></textarea></td>
                  <td><b>School Correspondence Address</b></td>
                  <td>
                     <textarea  name="schoolcorrecpondanceAdd" rows="4" ></textarea>
                  </td>
               </tr>
               <tr>
		<td><b>School Established Date-</b></td>
                  <td><input type="date" name="estblishDate"/></td>
                  <td><b>Date of Registration</b></td>
                  <td><input type="date" name="registrationDate"/></td>
               </tr>
 <tr>
		<td><b>Country of Registration-</b></td>
                  <td><select name="regCon">
        <option value="UK">UK</option>
        <option value="IRELAND">IRELAND</option>

     

        
    </select></td>
                  <td><b>Introducer Code</b></td>
                  <td><input type="text" name="introducerCode"  maxlength="12" /></td>
               </tr>

 <tr>
	<td><b>Documents to Upload</b></td>
                  <td><select name="regCon">
        <option value="Passport">PASSPORT</option>
        

     

        
    </select></td>
                  <td></td>
                  <td></td>
               </tr>
               <tr>
                <th colspan="2">First Contact</th>
                <th colspan="2">Second Contact</th>
            </tr>
               <tr>
                  <td><b>Title</b></td>
                  <td><select name="fTitle">
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>

     

        
    </select></td>
<td><b>Title</b></td>
                  <td><select name="sTitle">
        <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>

     

        
    </select></td>
               </tr>
               <tr>
<td><b>First Name</b></td>
                  <td><input type="text" name="fFirstName"  maxlength="30"/></td>
                  <td><b>First Name</b></td>
                  <td>
                     <input type="text" name="sFirstName"  maxlength="30" />
                  </td>
               </tr>
               <tr>
<td><b>Middle Name</b></td>
                  <td><input type="text" name="fMiddleName"  maxlength="30" /></td>
                  <td><b>Middle Name</b></td>
                  <td><input type="text" name="sMiddleName" maxlength="30"  /></td>
               </tr>
 <tr>
<td><b>Last Name</b></td>
                  <td><input type="text" name="fLastName" maxlength="30"  /></td>
                  <td><b>Last Name</b></td>
                  <td><input type="text" name="sLastName"  maxlength="30" /></td>
               </tr>

 <tr>
<td><b>Designation in School</b></td>
                  <td><input type="text" name="fDesignation" maxlength="50"  /></td>
                  <td><b>Designation in School</b></td>
                  <td><input type="text" name="sDesignation"  maxlength="50" /></td>
               </tr>


 <tr>
<td><b>Email</b></td>
                  <td><input type="text" name="fEmail"   /></td>
                  <td><b>Email</b></td>
                  <td><input type="text" name="sEmail"   /></td>
               </tr>

 <tr>
<td><b>Phone Number</b></td>
                  <td><input type="text" name="fPhoneNo"   /></td>
                  <td><b>Phone Number</b></td>
                  <td><input type="text" name="sPhoneNoe"   /></td>
               </tr>

               <tr>
      <td><b>No of Children in school-</b></td>
      <td><input type="text" name="childrenNo" /></td>
    </tr>
    <tr>
      <td><b>Type of Help Required</b></td>
      <td>
	<select name="helpType">
        <option value="Bag">Bag</option>
        <option value="SchoolFee">School Fee</option>
        
    </select>
</td>
    </tr>
    <tr>
      <td><b>No of Children in need of help-</b></td>
      <td><input type="text" name="childNoForHelp" /></td>
    </tr>
    <tr>
		<td><input type="submit" value="Accept"/></td>
<td></td><td></td>
		<td><input type="submit" value="Decline"/></td>
	</tr>

 
            </tbody>
         </table>

    
  )
}

export default CharityAdmin