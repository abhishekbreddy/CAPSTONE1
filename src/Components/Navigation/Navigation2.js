import {Link} from 'react-router-dom'
import './Style.css'
export default class Navigation extends React.Component{
    render(){
        return (
        <div className="abhi"> 
 
      
     
        <Link to="/studentrecruiter/">
          <li>student</li>
        </Link>
        <Link to="/studentrecruiter/">
          <li>Recruiter</li>
        </Link>  
            
        
          

     
      
    
    </div>);
    }
}