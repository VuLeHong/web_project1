import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <img className='productdisplay-main-img' src={product.image} alt="" />
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">{product.old_price}.000 đ</div>
                <div className="productdisplay-right-price-new">{product.new_price}.000 đ</div>
            </div>
            <div className="productdisplay-right-description">HÌNH KHẮC LASER SẮC NÉT, MÀU VẼ THỦ CÔNG không bao giờ phai.</div>
            <button className='productdisplay-right-button' onClick={()=>{addToCart(product.id)}}>Thêm vào giỏ hàng</button>
            <p className='productdisplay-right-category'><span>Phân loại :</span>{product.category}</p>
            {/* <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>  */}
        </div>
    </div>
  )
}

export default ProductDisplay
