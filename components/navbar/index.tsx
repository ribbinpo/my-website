import React, { useCallback } from "react";

import { NAV_LINK } from "@/constants/nav-link.constant";

import ButtonForm from "../form/button.form";

const Navbar = () => {
  const menuComponent = useCallback(() => {
    return NAV_LINK.map((menu) => <div key={menu.name}>{menu.name}</div>);
  }, []);

  return (
    <nav className="flex justify-between py-6 px-24">
      {/* Logo */}
      <div className="flex space-x-1">
        <div>logo</div>
        <span>RibbinPo</span>
      </div>
      {/* Main Menu */}
      <div className="flex space-x-10">{menuComponent()}</div>
      {/* Button */}
      <div>
        <ButtonForm>Click Me</ButtonForm>
      </div>
    </nav>
  );
};

export default Navbar;
