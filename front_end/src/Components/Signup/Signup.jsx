import React, {useState} from 'react'
import './Signup.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
const Signup = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handlesubmit(e) {
    e.preventDefault();

    try {

      await axios.post("http://localhost:5000/signup",{
        username, password
      })
      
      .then(res=>{
        if(res.data === "exist"){
            toast.warn('User already exist', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
          });
            
        }
        else if(res.data === "notexist"){
          localStorage.setItem("acname", username)
          toast(`🫶🏿 Welcome ${username}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          history("/",{state:{id:username}})
      }

      })
      .catch(e=>{
        toast.warn('Wrong details', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
        console.log(e)
      })




    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <form onSubmit={handlesubmit}>
          <div className="loginsignup-fields">
            <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' />
            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
          </div>
          <button type="submit">Sign up</button>
          <p className="loginsignup-login">Already have an account?<Link to='/login'> <span>Log in here</span></Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup
