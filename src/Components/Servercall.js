import Axios from 'axios'
function Getdata(){
    return Axios.get('http://jsonplaceholder.typicode.com/users')

}
export default Getdata