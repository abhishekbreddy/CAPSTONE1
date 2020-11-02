import logo from './logo.svg';
import './App.css';
import student from '/home/abhi/Desktop/capstone1/job/src/Components/Student.js'
import Home from '/home/abhi/Desktop/capstone1/job/src/Components/Home.js';
import {BrowserRouter, Route  } from 'react-router-dom'
import Navigation from '/home/abhi/Desktop/capstone1/job/src/Components/Navigation/Navigtion.js'
import Companies from '/home/abhi/Desktop/capstone1/job/src/Components/Compnies.js'
import Contact from '/home/abhi/Desktop/capstone1/job/src/Components/Contact.js'
import Myprofilestudent from '/home/abhi/Desktop/capstone1/job/src/Components/Myprofilestudent.js'
import Signin from '/home/abhi/Desktop/capstone1/job/src/Components/Signin.js'

function App() {
  return(<div><BrowserRouter>
    <Navigation/>
    <Route exact path="/"component={Home}/>
    <Route exact path="/comp"component={Companies}/>
    <Route exact path="/cont" component={Contact}/>
    <Route exact path="/Myprofilestudent"component={Myprofilestudent}/>
    <Route exact path="/Signin"component={Signin}/>
    
    </BrowserRouter>
    </div>)
  

}

export default App;
