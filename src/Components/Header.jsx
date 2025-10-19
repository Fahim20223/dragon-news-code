import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="pt-5 flex flex-col justify-center items-center">
      <img src={logo} alt="logo" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
