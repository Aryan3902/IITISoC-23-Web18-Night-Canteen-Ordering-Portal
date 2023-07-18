import React from 'react'
import Orders from '../../components/orders_components/Orders'
import orders from '../../components/orders_components/orderArray'


export default function AdminOrders({order}) {
  return (
    <>
    <div className='admin-order-div'>
      <h1 style={{marginLeft: "90px",marginTop: "100px" ,marginBottom: "25px"}}>Orders</h1>
      <hr style={{margin: "0 90px"}}/>
      <div className="container">
      <div className="row">{
          orders.map(()=>{
            return <Orders key={!(order===null) ? order.time:"-"} date={!(order===null) ? order.date : "-"} time={!(order===null) ? order.time : "-"} orderMenu={!(order===null) ? order.orderMenu:[]} total={!(order===null) ?order.total:"-"}/>
          })
        }</div>
  </div>
    </div>
    </>
  )
}
