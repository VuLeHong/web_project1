import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = (props) => {
  const {product} = props;
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Thông tin chi tiết</div>
            <div className="descriptionbox-nav-box fade">Reviews (96)</div>
        </div>
        <div className="descriptionbox-description">
            <p>▪️ HÌNH KHẮC LASER SẮC NÉT, MÀU VẼ THỦ CÔNG không bao giờ phai.</p>
            <p>▪️ MẶT GỖ được xử lý mịn và có phủ bảo vệ giúp chống ẩm mốc, cong vênh, mối mọt (trong điều kiện sử dụng bình thường)</p>
        </div>
    </div>
  )
}

export default DescriptionBox
