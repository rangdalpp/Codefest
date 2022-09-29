import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/Home.js';
import NavBar from './components/navigation/NavBar.js'
import Login from './components/login/Login.js';
import ReferASchool from './components/register/ReferASchool';
import RegisterSchool from './components/register/RegisterSchool';
import SignUp from './components/register/SignUp';
import RegisterChild from './components/register/RegisterChild';
import CharityAdmin from './components/admin/CharityAdmin';
import {useState, useEffect} from 'react';
import { getLogInId, getUserType, getLogInDetails } from "./lib/auth"

function App() {
  const [loggedIn, setLoggedIn] = useState(getLogInDetails())
  const [loginId, setLoginId] = useState(getLogInId())
  const [userType, setUserType] = useState(getUserType())


  useEffect(() => {
    if (!loggedIn) {
      localStorage.removeItem("start-young-loginId")
      localStorage.removeItem("start-young-userId")
      setLoggedIn(false)
      setLoginId(false)
    }
  }, [loggedIn])

  if (getLogInDetails()) {
    <Navigate to="/" />
  }

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginId={loginId}/>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginId={loginId} setLoginId={setLoginId} userType={userType} setUserType={setUserType}/>}></Route>
        <Route exact path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} loginId={loginId} setLoginId={setLoginId} userType={userType} setUserType={setUserType}/>}></Route>
        <Route exact path="/refer-a-school" element={<ReferASchool/>}></Route>
        <Route exact path="/register-a-school" element={<RegisterSchool/>}></Route>
        <Route exact path="/sign-up" element={<SignUp/>}></Route>
        <Route exact path="/register-a-child" element={<RegisterChild/>}></Route>
        <Route exact path="/charity-admin" element={<CharityAdmin/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
