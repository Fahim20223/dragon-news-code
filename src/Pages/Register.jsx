import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
          <h2 className="text-center text-2xl font-semi-bold">
            Register your account
          </h2>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="Photo URL" />
              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p className="font-semibold text-center pt-3">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
