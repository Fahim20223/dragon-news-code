import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="space-y-5">
      <h3 className="font-bold mb-5">Login With</h3>
      <button className="btn btn-outline w-full btn-secondary">
        <FcGoogle size={20} />
        Login With Goggle
      </button>
      <button className="btn btn-outline w-full btn-primary">
        <FaGithub size={20} />
        Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
