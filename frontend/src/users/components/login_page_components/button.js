import React from "react";
import "../../pages/login_page/loginPage.css";
import './button.css'
function Button(props) {
    return(
        <button className={"button "+props.status} >{props.identity}</button>
    );
}
export default Button;