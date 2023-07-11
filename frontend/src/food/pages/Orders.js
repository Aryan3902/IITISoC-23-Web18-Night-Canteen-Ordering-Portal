import React from 'react'

export default function Orders(props) {
  return (
    
        <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="container mt-3">
          <div className="card mb-3" style={{maxWidth: "18rem"}}>
              <div className="card-header bg-transparent"><h3>Order No {props.order_id}</h3><br/><h5>Date: {props.date}<br/>Time: {props.time}</h5></div>
              <div className="card-body">
                <h5 className="card-title">Order menu</h5>
                <div className="product border-bottom table-responsive" style={{height: "150px"}}>

                  <table className="table table-borderless overflow-auto">

                  <tbody>
                      <tr>
                          <td width="20%">
                          
                          <img src="https://e1.pxfuel.com/desktop-wallpaper/841/15/desktop-wallpaper-jay-shri-ram-sree-ram-thumbnail.jpg" width="40"/>

                      </td>
                  
                      <td width="60%">
                          <span className="font-weight-bold">Men's Sports cap</span>
                          <div className="product-qty">
                              <span className="d-block">Quantity:1</span>
                              <span>Color:Dark</span>
                              
                          </div>
                      </td>
                      <td width="20%">
                          <div className="text-right">
                              <span className="font-weight-bold">$67.50</span>
                          </div>
                      </td>
                      </tr>


                      <tr>
                          <td width="20%">
                          
                          <img src="https://i.imgur.com/SmBOua9.jpg" width="40"/>

                      </td>
                  
                      <td width="60%">
                          <span className="font-weight-bold">Men's Collar T-shirt</span>
                          <div className="product-qty">
                              <span className="d-block">Quantity:1</span>
                              <span>Color:Orange</span>
                              
                          </div>
                      </td>
                      <td width="20%">
                          <div className="text-right">
                              <span className="font-weight-bold">$77.50</span>
                          </div>
                      </td>
                      </tr>
                      <tr>
                        <td width="20%">
                        
                        <img src="https://i.imgur.com/SmBOua9.jpg" width="40"/>

                    </td>
                
                    <td width="60%">
                        <span className="font-weight-bold">Men's Collar T-shirt</span>
                        <div className="product-qty">
                            <span className="d-block">Quantity:1</span>
                            <span>Color:Orange</span>
                            
                        </div>
                    </td>
                    <td width="20%">
                        <div className="text-right">
                            <span className="font-weight-bold">$77.50</span>
                        </div>
                    </td>
                    </tr>
                    <tr>
                      <td width="20%">
                      
                      <img src="https://i.imgur.com/SmBOua9.jpg" width="40"/>

                  </td>
              
                  <td width="60%">
                      <span className="font-weight-bold">Men's Collar T-shirt</span>
                      <div className="product-qty">
                          <span className="d-block">Quantity:1</span>
                          <span>Color:Orange</span>
                          
                      </div>
                  </td>
                  <td width="20%">
                      <div className="text-right">
                          <span className="font-weight-bold">$77.50</span>
                      </div>
                  </td>
                  </tr>
                  <tr>
                    <td width="20%">
                    
                    <img src="https://i.imgur.com/SmBOua9.jpg" width="40"/>

                </td>
            
                <td width="60%">
                    <span className="font-weight-bold">Men's Collar T-shirt</span>
                    <div className="product-qty">
                        <span className="d-block">Quantity:1</span>
                        <span>Color:Orange</span>
                        
                    </div>
                </td>
                <td width="20%">
                    <div className="text-right">
                        <span className="font-weight-bold">$77.50</span>
                    </div>
                </td>
                </tr>
                  </tbody> 
                      
                  </table>
                  


              </div>
              </div>
              <div className="card-footer bg-transparent">
                <table>
                  <tbody>
                    <tr>
                      <td width="80%">
                        <h5>Total</h5>
                      </td>
                      <td width="20%">
                        <h5>Rs. {props.amount}</h5>
                      </td>
                    </tr>
                    <tr>
                      <td width="80%">
                        <h6>Payment Screenshot</h6>
                      </td>
                      <td width="20%">
                        <p>{props.payment_screenshot}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    
    
  )
}
