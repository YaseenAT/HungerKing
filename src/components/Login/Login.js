import React from "react";
import css from "../Login/Login.module.css";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
export default function Login() {


// console.log(arr.)
  return (
    <div className={css.homeBody}   >
      <div className={css.home}>
          <div className={css.loginpage}>
            <div className={css.headingText}>
            <label htmlFor="logIn">Sign In</label>
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
              <div> create account?  <span>
                <a rel="stylesheet" href="/">dfdfd</a> 
              </span>
              </div>
              <button 
              onClick={() => {
               alert("Log In ");
              }}
                >
              
                Log In
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

