import React from 'react'
import {Route} from 'react-router-dom'

import Applications from '../Components/Applications.js'
import Contact from '../Components/Contact.js'
import Myprofile from '../Components/Profilecompletion.js'
import Signin from '../Components/Signin.js'
import Home from '../Components/Home.js'
import Navigation1 from '../Navigation/Navigation1'

 class Student extends React.Component{
    render (){
        return (<div><Navigation1/>
            <Route exact path="/Recruiter/"component={Home}/>
            <Route exact path="/Recruiter/Applications"component={Applications}/>
            <Route exact path="/Recruiter/cont" component={Contact}/>
            <Route exact path="/Recruiter/Myprofile"component={Myprofile}/>
            <Route exact path="/Recruiter/Signin"component={Signin}/>
            </div>)
    }

}
export default Student;
