import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/home/Home.js';
import NavBar from './components/navigation/NavBar.js'
import Login from './components/login/Login.js';
import ReferASchool from './components/register/ReferASchool';
import RegisterSchool from './components/register/RegisterSchool';
import SignUp from './components/register/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/refer-a-school" element={<ReferASchool/>}></Route>
        <Route exact path="/register-a-school" element={<RegisterSchool/>}></Route>
        <Route exact path="/sign-up" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;