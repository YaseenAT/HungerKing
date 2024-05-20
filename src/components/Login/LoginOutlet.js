import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";


export default function LoginOutlet(){

    return(
        <div>
            <Outlet></Outlet>
        </div>
    )
}