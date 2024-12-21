import React from "react";
import css from "./OrderDashboard.module.css"
import NavList from "../NavDashboard/NavList";
const OrderDashboard=()=>{
    return(
        <>
        <div className={css.main} >
 <NavList/>

        </div>

        </>
    )
}
export default OrderDashboard;