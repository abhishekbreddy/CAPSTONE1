import React from 'react'
import '/home/abhi/Desktop/capstone1/job/src/Components/Pstyle.css'
export default class Myprofilestudent extends React.Component{
  constructor()
  {
  super()
    this. state = { 
    Fullname:null,
      Designation:null,
      
      Companyname:null,
      Emailid:null,
      mobilenumber:null,
      Companyaddress:null,
      companyid:null
      
  
      

  
  }; 
        
}     render() {
        return(
          <div className="container bg-dark text-white mt-2">
<div className = "row">
<div className="col-sm-8">   

        
          <div class="form1">
    
          <form className="mx-auto px-auto">
            <p className="h2 font-weight-bold mt-3 mb-3 text-center">Profile</p>
            <div className="form-group ">
              <input type="text" placeholder="Full Name" className="form-control"
              onChange={(e)=>this.setState({
                ...this.state,
                Fullname:e.target.value
              })} 
              />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="designatin" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
                Designation:e.target.value
              })}
              />
              
            </div>
            <div className="form-group">
            <input type="textarea" placeholder="companyaddress" className="form-control" 
            onChange={(e)=>this.setState({
              ...this.state,
              Companyaddress:e.target.value
            })}
            />
            
          </div>
          <div className="form-group">
          <input type="email" placeholder="mobilenumber" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
           mobilenumber:e.target.value
          })}
          />
        </div>
            <div className="form-group">
              <input type="email" placeholder="officeEmail" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
               officeemail:e.target.value
              })}
              />
            </div>
    
            <div className="form-group"><label>companyid</label>
              <input type="file" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
                companyid:e.target.value
              })}
              />
    <input value="SUBMIT" type="submit" className="btn btn-primary font-weight-bold mt-3 mx-auto" onClick={this.getdata} />
                  
          
          </form>
           </div>
      </div></div></div> )}}
