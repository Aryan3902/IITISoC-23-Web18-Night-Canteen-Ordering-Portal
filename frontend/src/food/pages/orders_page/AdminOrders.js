import React from 'react'
import './adminOrders.css'
import Orders from '../../components/orders_components/Orders'
import orders from '../../components/orders_components/orderArray'
import { Link } from 'react-router-dom';


export default function AdminOrders({cart}) {
  return (
    <>
    <div className='admin-order-div'>
      <Link to="/admin/updates"><button style={{marginLeft: "90px",marginTop: "100px" ,marginBottom: "25px"}}>see updates</button></Link>
      <h1 style={{marginLeft: "90px"}}>Orders</h1>
      <hr style={{margin: "0 90px"}}/>
      <div className="container">
      <div className="row">{
          orders.map((order)=>{
            return <Orders key={order.order_id} date={order.date} time={order.time} amount={order.amount} payment_screenshot={order.payment_screenshot} order_id={order.order_id} cart={cart}/>
          })
        }</div>
  </div>
    </div>
    </>
  )
}
