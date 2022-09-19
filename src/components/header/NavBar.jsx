import Link from "next/link";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import { sideBarItems }from './sideBar';
import { ContainerNav } from './stylesNav';


function NavBar() {
  const [sidebar, setSideBar] = useState(true);

  const showSideBar = () => {
    setSideBar(!sidebar);
  };

  return (
    <div>
            <ContainerNav>
                <div className="navbar">
                        <FaIcons.FaBars onClick={showSideBar} className="menu-bars"/>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                            <GrIcons.GrClose onClick={showSideBar} className="menu-bars"/>           
                    </li>
                    {sideBarItems.map((e, i) => {
                        return (
                            <li key={i} className={e.cName} onClick={showSideBar}>
                                <a href={e.path}>
                                    {e.title}
                                </a>
                            </li>
                        )
                    })}
                    </ul>
                </nav>
            </ContainerNav>
    </div>
  );
}

export default NavBar;
