import React from 'react'
import './adminOrders.css'
import NavbarAdmin from '../components/NavbarAdmin'
import Orders from './Orders'
import orders from './orderArray'


export default function AdminOrders() {
  return (
    <>
    <NavbarAdmin/>
    <div className='admin-order-div'>
      <h1 style={{marginLeft: "90px",marginTop: "100px" ,marginBottom: "25px"}}>Orders</h1>
      <hr style={{margin: "0 90px"}}/>
      <div className="container">
      <div className="row">{
          orders.map((order)=>{
            return <Orders key={order.order_id} date={order.date} time={order.time} amount={order.amount} payment_screenshot={order.payment_screenshot} order_id={order.order_id}/>
          })
        }</div>
  </div>
    </div>
    </>
  )
}
