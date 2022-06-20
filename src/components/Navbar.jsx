import React from "react";
import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
  return <div>
    <Link to='/'>Home</Link>
    <Link to='/Login'>Login</Link>
    <Outlet />
  </div>;
};

export default Navbar;
