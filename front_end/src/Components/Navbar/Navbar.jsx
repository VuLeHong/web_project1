import React, { useContext, useState } from 'react'
import './Navbar.css'
import { toast } from 'react-toastify';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const[menu,setMenu] = useState("shop")
    const navigate = useNavigate();
    const {getTotalCartItems} = useContext(ShopContext);
    const auth = localStorage.getItem('acname')
    const logout = ()=>{
        toast(`👋🏾 Good bye ${auth} !!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        localStorage.clear();
    }
    const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className='navbar-temp'>
        <div className='navbar'>
        <div >
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
        </div>
        <Link to='/'style={{ textDecoration: 'none', color: 'white' }}>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <span>NAU FACTORY</span>
            </div>
        </Link>
        </div>
        
        {/* <div className="large-menu"> 
            <div className="nav-menu"> */}
                    {/* <div className="nav-menu"> */}
                    {/* <ul className={`nav-menu ${menuOpen ? "open1" : "close1"}`}> */}
                    <ul className={"nav-menu  close"}>
                        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/bookmark'>Bookmark</Link></li>
                        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/mockhoa'>Móc khóa</Link></li>
                        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/lich'>Lịch</Link></li>
                    </ul>     
                {/* </div> */}
            <div className="nav-login-cart">
            {
                    auth ? (
                    <div className='dropdown'>
                        <button className='dropbtn'>Hi, {auth}</button>
                        <div className="dropdown-content">
                            <Link to='/'><a >Profile</a></Link>
                            <Link to='/'><a onClick={logout}>Log out</a></Link>
                        </div>
                    </div> 
                    
                ):  
                (<Link to='/login'><button>Log In</button></Link>)
            }
            <div className='cart-cart'>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
                
        </div>
        </div>
        <div>
          <ul className={`nav-menu ${menuOpen ? "open" : "close"} mobile`}>  
                        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/bookmark'>Bookmark</Link></li>
                        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/mockhoa'>Móc khóa</Link></li>
                        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: 'white' }} to='/lich'>Lịch</Link></li>
        </ul>
        </div>
            
    </div>
  )
}

export default Navbar
