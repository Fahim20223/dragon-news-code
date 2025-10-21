import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.name.value;
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError("");
    }
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({ name, email, photo, password });
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(result.user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
          <h2 className="text-center text-2xl font-semi-bold">
            Register your account
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                  required
                />
                {nameError && <p className="text-red-600">{nameError}</p>}
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
                  required
                />
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
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
