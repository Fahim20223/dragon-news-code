import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);

  const handleLogOut = () => {
    console.log("user trying to to Log Out");
    userSignOut()
      .then(() => {
        alert("You Logged Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-3 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img
          className="w-12 rounded-full"
          src={user ? user.photoURL : userImg}
          alt="user image"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary">
            Log Out{" "}
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
