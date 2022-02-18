
import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import  LandingPage  from './components/LandingPage';
import  Services  from './components/Services';
import About  from './components/About';
import  Events  from './components/Events';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Booking from './components/Booking';
import Admin from './components/Admin'
import CoursePage from './components/CoursePage';
import CoursePagePaid from './components/CoursePagePaid'
import Appointments from "./components/Appointments";



class App extends Component {
  render() {
    return (      
      <div className="App">      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/coursepage" element={<CoursePage />} />
        <Route path="/coursepagepaid" element={<CoursePagePaid />} />
				<Route path="/appointments" element={<Appointments />} />
      </Routes>
    </div>      
    )
  }
}

export default App;





