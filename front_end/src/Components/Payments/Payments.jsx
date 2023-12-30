import React from 'react'
import './Payments.css'

const Payments = () => {
  return (
    <div className="payment-container">
      <div className='payment-address-container'>
        <div class="payment-form">
          <h2>Payment Infomation</h2>
          <form>
            <label for="card-number">Card Number:</label>
            <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required/>
            <label for="expiry-date">Expired date:</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required/>
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required/>
          {/* <button type="submit">Xác nhận thanh toán</button> */}
          </form>
        </div>
        <div class="address-form">
          <h2>Adress Information</h2>
          <form>
            <label for="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" placeholder="William Bob" required/>
            <label for="address">Address:</label>
            <textarea id="address" name="address" placeholder="Apartment, Street Number and City" required></textarea>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" placeholder="333 - 666 - 999" required/>
          {/* <button type="submit">Xác nhận địa chỉ</button> */}
          </form>
        </div>
      </div>
      <div className='btn'>
      <button type='submit'>Xác nhận</button>
      </div>
    </div>
  )
}

export default Payments
