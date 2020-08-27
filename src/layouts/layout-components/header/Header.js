import React, { useState, useContext } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import * as data from "./Data";
import { AppContext } from "../../../contexts/appContext";
import { UserContextProvider } from "../../../contexts/userContext";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../../../assets/images/logo-icon.png";
import logolighticon from "../../../assets/images/logo-light-icon.png";
import logodarktext from "../../../assets/images/logo-text.png";
import logolighttext from "../../../assets/images/logo-light-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const { settings } = useContext(AppContext);

  // TODO create child element to access user context.

  return (
    <UserContextProvider>
      {/* <header className="topbar navbarbg" data-navbarbg={settings.activeNavbarBg}>
        <Navbar
          className={
            "top-navbar " + (settings.activeNavbarBg === "skin6" ? "navbar-light" : "navbar-dark")
          }
          expand="md"
        >
          <div className="navbar-header" id="logobg" data-logobg={settings.activeLogoBg}></div>
        </Navbar>
      </header> */}
    </UserContextProvider>
  );
};
