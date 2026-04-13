import { House } from "lucide-react";
import React from "react";
import Navlinks from "./Navlinks";

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <House></House>
        }
    ]

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          {
            navItems.map((item , ind) =>{
                return(
                    <Navlinks 
                    to={item.path}
                    key={ind}>{item.icon}{item.text}</Navlinks>
                )
            })
          }
          <li className="lg:hidden">
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
