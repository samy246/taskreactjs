import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../image/reg.png";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  //login validate

  const loginIsvalidate = () => {
    let isproceed = true;
    let errormsg = "Please Enter value in";
    if (input.name === null || input.name === "") {
      isproceed = false;
      errormsg += " UserName";
    }
    if (input.password === null || input.password === "") {
      isproceed = false;
      errormsg += " Password";
    }
    if (!isproceed) {
      toast.warning(errormsg);
    }
    return isproceed;
  };

  //login submit

  const loginSubmit = (e) => {
    e.preventDefault();

    const loginUser = JSON.parse(localStorage.getItem("user"));

    if (loginIsvalidate()) {
      if (
        input.name === loginUser.name &&
        input.password === loginUser.password
      ) {
        localStorage.setItem("loggedin", true);
        toast.success("Login Successfully :)");
        navigate("/home");
      } else {
        toast.error("Login failed :| ");
      }
    }
  };

  return (
    <div className="loginbg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card my-5">
              <form
                className="card-body cardbody-color p-lg-5"
                onSubmit={loginSubmit}
              >
                <h2 className="text-center text-dark mt-5">Sign In</h2>
                <div className="text-center">
                  <img
                    src={img}
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <label>
                    User Name:<span className="errmsg">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="User Name"
                    name="name"
                    value={input.name}
                    onChange={(e) => {
                      setInput({ ...input, [e.target.name]: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label>
                    Password:<span className="errmsg">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    name="password"
                    value={input.password}
                    onChange={(e) => {
                      setInput({
                        ...input,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-50"
                    id="loginbtn"
                  >
                    Login
                  </button>
                </div>
                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  Not Registered?
                  <Link to={"/"}>
                    <span className="text-dark fw-bold">
                      {" "}
                      Create an Account
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
