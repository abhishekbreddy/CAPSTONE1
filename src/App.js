import logo from './logo.svg';
import './App.css';
//import student from '/home/abhi/Desktop/capstone1/job/src/Components/Student.js'
import Home from '../Components/Home.js';
import {BrowserRouter, Route ,Switch } from 'react-router-dom'


import Student from '../Components/Student'
import Recruiter from '../Components/Recruiter'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return(
   <div><BrowserRouter>
  <Student/>
    </BrowserRouter></div>
    
    )
  

}

export default App;
