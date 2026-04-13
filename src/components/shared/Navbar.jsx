import { ChartLine, Clock, House, Link } from "lucide-react";
import React from "react";
import Navlinks from "./Navlinks";
import navLogo from "../../assets/logo.png"

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <House></House>
        },
        {
            path: "/timeline",
            text: "Timeline",
            icon: <Clock></Clock>
        },
        {
            path: "/stats",
            text: "Stats",
            icon: <ChartLine></ChartLine>
        }
    ]

  return (
    <div className="navbar bg-base-100  shadow-sm px-5 md:px-10">
      <div className="flex-1">
        <img src={navLogo} alt="Nav Logo" />
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
         <div className="hidden lg:flex gap-3">
             {
            navItems.map((item , ind) =>{
                return(
                    <Navlinks 
                    to={item.path}
                    key={ind}>{item.icon}{item.text}</Navlinks>
                )
            })
          }
         </div>
          <li className="relative lg:hidden btn bg-white">
            <details>
              <summary className="text-[17px]  font-bold text-[#244D3F]">Pages</summary>
              <ul className="absolute -left-4   bg-base-100 grid gap-3 rounded-t-none p-2">
                {
            navItems.map((item , ind) =>{
                return(
                    <Navlinks 
                    to={item.path}
                    key={ind}>{item.icon}{item.text}</Navlinks>
                )
            })
          }
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
