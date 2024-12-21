import React from "react";
import css from "./navList.module.css"
import dish from "../../assets/food-tray.png"
const NavList = () => {

    let menu = [
        {
            dishName: "Soft Drinks",
            dishId: 1
        },
        {
            dishName: "disert",
            dishId: 2
        },
        {
            dishName: "Sweets",
            dishId: 3
        },
        {
            dishName: "Hunger Special",
            dishId: 4
        }
    ]
    return (
        <>
            <div className={css.mainList} >
                {menu.map((ele) => (
                    <div>
                        <img src={dish} alt="hghg" className={css.imageIcon} ></img>
                        {ele.dishName}


                    </div>
                ))}
            </div>
        </>
    )
}

export default NavList;