import React, { useState } from "react";
import css from "../Login/Login.module.css";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import snaks from "../../assets/snaks_bg12.png"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { images } from "../../constants";
import '../../container/Gallery/Gallery.css';

export default function Login() {
  const [Register, setRegister] = useState(false)
  const scrollRef = React.useRef(null);
  const nav = useNavigate();
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  console.log(Register)
  return (
    <div className={css.homeBody}>
      <div className={css.home}>
        <div className={css.upperBox} >
          <div className={css.imageDiv} >


          </div>
          <div className={css.loginpage}>
            <div className={css.headingText}>
              <label htmlFor="logIn"> { Register? "Sign up": "Login"}</label>
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
              <div style={{ color: "#fff", fontSize: "12px", opacity: "0.5", marginLeft: "100px", marginTop: "-15px" }} >
                {" "}
                Forgot password?{" "}

              </div>
              <div className={css.button}>
              {  Register ?
                <button
                  onClick={() => {
                    nav("/")
                  }}
                >
                  Log In
                </button> :
                <button
                  onClick={() => {
                    nav("/")
                  }}
                >
                  Sign up
                </button>
                }

              </div>
              <div style={{ color: "#fff", fontSize: "12px", opacity: "0.5" }} >
                {" "}
                Dont have an account?{" "}
                <span
                  onClick={() => { setRegister(true) }}
                  className={css.RegisterLine}
                >
                  <a rel="stylesheet" >
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
