import React from "react";
import css from "../Login/Login.module.css";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import snaks from "../../assets/snaks_bg12.png"
export default function Login() {
  const nav = useNavigate();

  // console.log(arr.)
  return (
    <div className={css.homeBody}>
      <div className={css.home}>
        <div className={css.upperBox} >
          <div className={css.imageDiv} >
            {/* <img src={snaks} >
            </img> */}
          </div>
          <div className={css.loginpage}>
            <div className={css.headingText}>
              <label htmlFor="logIn">Login</label>
            </div>
            <div className={css.miniBody}>
              <div className={css.head1}>
                {/* <label>User Name</label> */}
                <input type="text" placeholder="Enter User Name" />
              </div>
              
              <div className={css.head1}>
                {/* <label>Password</label> */}
                <input type="password" placeholder="Enter Password" />
              </div>
              <div style={{color:"#fff",fontSize:"12px",opacity:"0.5",marginLeft:"100px",marginTop:"-15px"}} >
                {" "}
                Forgot password?{" "}
                 
              </div>
              <div className={css.button}>
                <button
                  onClick={() => {
                    alert("Log In ");
                  }}
                >
                  Log In
                </button>
                 
              </div>
              <div style={{color:"#fff",fontSize:"12px",opacity:"0.5"}} >
                {" "}
                Dont have an account?{" "}
                <span>
                  <a rel="stylesheet" href="/">
                    Register here
                  </a>
                </span>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
