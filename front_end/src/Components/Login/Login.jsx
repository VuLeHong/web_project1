import React, {useState} from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
const Login = () => {
    const history = useNavigate();
    

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  async function handlesubmit(e){
      e.preventDefault();
      try {
          await axios.post("http://localhost:5000/login",{
              username,password
          })
          .then(res=>{
            if(res.data === "exist"){

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
                history("/")

            }
            else if(res.data === "notexist"){
              toast.warn('Wrong Username or Password', {
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

        <h1>Log In</h1>
        <form onSubmit={handlesubmit}>
        <div className="loginsignup-fields">
          <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  placeholder='Username' />
          <input type="password" onChange={(e)=>{setPassword(e.target.value)}}placeholder='Password' />
        </div>
        <button type="submit">Log in</button>
        <p className="loginsignup-login">Dont have an account?<Link to='/signup'> <span>Sign Up here</span></Link></p>
        </form>
         
     
      </div>
    </div>
    
  )
}

export default Login
