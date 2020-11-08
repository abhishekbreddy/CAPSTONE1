import React from 'react'
import '../Components/Pstyle.css'
export default class Myprofilestudent extends React.Component{
  constructor()
  {
  super()
    this. state = { 
      Fullname:null,
      course:null,
      Schoolname:null,
      Collegename:null,
      Emailid:null,
      Collegeid:null,
      Certificate:null,
      
  
        
        

  
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
            <div className="form-group mt-2"
            onChange={(e)=>this.setState({
              ...this.state,
              course:e.target.value
            })}
            >
                        <select className="form-control">
                            <option>Select course</option>
                            <option>B.tech</option>
                            <option>b.sc</option>
                            <option>b.com</option>
                            <option>m.c.a</option>
                        </select>
                    </div>
            <div className="form-group">
              <input type="text" placeholder="Schoolname" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
                Schoolname:e.target.value
              })}
              />
              
            </div>
            <div className="form-group">
            <input type="text" placeholder="Collegename" className="form-control" 
            onChange={(e)=>this.setState({
              ...this.state,
              Collegename:e.target.value
            })}
            />
            
          </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
                email:e.target.value
              })}
              />
            </div>
    
            <div className="form-group"><label>collegeid
              <input type="file" className="form-control" 
              onChange={(e)=>this.setState({
                ...this.state,
                Collegeid:e.target.value
              })}
              />
              
            </div>
</div>
            <div className="form-group"><label>Certificate</label>
            <input type="file" className="form-control" 
            onChange={(e)=>this.setState({
              ...this.state,
              Certificate:e.target.value
            })}
            />
            
          </div>
          <div className="form-group"><label>Resume</label>
          <input type="file" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
          Resume:e.target.value
          })}
          />
          
        </div>
    <input value="SUBMIT" type="submit" className="btn btn-primary font-weight-bold mt-3 mx-auto" onClick={this.getdata} />
                  
          
          </form>
           </div>
      </div></div></div> )}}
