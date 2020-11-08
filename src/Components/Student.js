import React from 'react'
import Home from '../Components/Home.js';

import Navigation from '../Components/Navigation/Navigtion.js'
import Companies from '../Components/Compnies.js'
import Contact from '../Components/Contact.js'
import  Applied from "../Components/Applied jobs.js";
import Myprofilestudent from '../Components/Myprofilestudent.js'
import Signin from '../Components/Signin.js'
import { Route } from 'react-router-dom';

 class Student extends React.Component{
    render (){
        return (<div><Navigation/>
            <Route exact path="/student/"component={Home}/>
            <Route exact path="/student/appliedjobs"component={Applied}/>
            <Route exact path="/student/comp"component={Companies}/>
            <Route exact path="/student/cont" component={Contact}/>
            <Route exact path="/student/Myprofilestudent"component={Myprofilestudent}/>
            <Route exact path="/student/Signin"component={Signin}/>
            </div>)
    }

}
export default Student;
