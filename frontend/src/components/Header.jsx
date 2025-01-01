// import React from 'react'

import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
// import logout from "../assets/logout.svg"
import login from "../assets/login.svg"
import Navbar from "./Navbar"
import { useContext, useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart} from "react-icons/fa"
import { ShopContext } from "../Context/ShopContext"
const Header = () => {

    const [menuOpened , setMenuOpened]= useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);
    const {getTotalCartItems} = useContext(ShopContext);

  return (
   <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1
    ring-slate-900/5 z-10">
    <div className="px-4 flex justify-between items-center
 py-3 max-xs:px-2">
        {/*logo*/}
        <div>
            <Link><img src={logo} alt="" height={66} width={88}></img></Link>
        </div>
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
        <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-32 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : 
            "flex item-start flex-col gap-y-12 fixed top-32 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>

        <div className="flex items-center gap-x-1 sm:gap-x-6 bold-16">
            {!menuOpened? (
                <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}
                />) : (
                <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}
                />)}
                <div className="flex items-center sm:gap-x-6">
                    <NavLink to={"cart-page"} className={"flex"}><FaOpencart 
                    className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/>
                    <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-orange-400 text-black medium-14 -top-2">{getTotalCartItems()}</span>
                    </NavLink>
                    {/* <NavLink to={"logout"} className={"btn bg-orange-400 h-8 w-20 rounded-full text-black flex items-center justify-center medium-10"}><img src={logout} alt="logoutIcon" height={14} width={14}/>LogOut</NavLink> */}
                    <NavLink to={"login"} className={"btn bg-orange-400 h-8 w-20 rounded-full text-black flex items-center justify-center medium-10"}><img src={login} alt="logInIcon" height={14} width={14}/>
                        Login</NavLink>
                </div>
        </div>
    </div>
   </header>
  )
}

export default Header