import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { Link , useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart,HandleDecrement,HandleIncrement} = useContext(ShopContext);
    const auth = localStorage.getItem('acname')
    const navigate = useNavigate();
    /*const notify = () =>{
        toast.warn('Please Log in', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }*/
    const payment = ()=>{
        auth ?(navigate('/payment')):(
            navigate('/login'))
    }
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItems[e.id]>0) 
            {
                return  <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon'/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <div className="cartitems-quantity">
                                    <button type='button' className='btn-quantity' onClick={() => HandleDecrement(e.id)}>-</button>
                                    <div className="cartitems-quantity textcenter">{cartItems[e.id]}</div>
                                    <button type='button' className='btn-quantity' onClick={() => HandleIncrement(e.id)}>+</button>
                                </div>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button onClick={payment}>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>Your note</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Note'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems