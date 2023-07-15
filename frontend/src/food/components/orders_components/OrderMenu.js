import React from "react";

export default function OrderMenu({cartItem}) {
  return (
    <tr>
      <td width="20%">
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/841/15/desktop-wallpaper-jay-shri-ram-sree-ram-thumbnail.jpg"
          width="40"
        />
      </td>

      <td width="60%">
        <span className="font-weight-bold">{cartItem.name}</span>
        <div className="product-qty">
          <span className="d-block">Quantity:{cartItem.amount}</span>
        </div>
      </td>
      <td width="20%">
        <div className="text-right">
          <span className="font-weight-bold">{cartItem.amount*cartItem.price}</span>
        </div>
      </td>
    </tr>
  );
}
