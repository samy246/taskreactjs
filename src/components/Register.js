import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../image/reg.png";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    contactno: "",
  });

  //validation

  const Isvalidation = () => {
    let isproceed = true;
    let errormsg = "Please Enter value in ";
    if (input.name === null || input.name === "") {
      isproceed = false;
      errormsg += " UserName";
    }
    if (input.password === null || input.password === "") {
      isproceed = false;
      errormsg += " Password";
    }
    if (input.email === null || input.email === "") {
      isproceed = false;
      errormsg += " EmailId";
    }
    if (input.contactno === null || input.contactno === "") {
      isproceed = false;
      errormsg += " ConatctNo";
    }

    if (input.password.length < 8) {
      isproceed = false;
      errormsg += " Password Greater Than 8";
    }

    if (!isproceed) {
      toast.warning(errormsg);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(input.email)) {
      } else {
        isproceed = false;
        toast.warning("Please Enter the Valid Email");
      }
      if (/^([+]\d{2})?\d{10}$/.test(input.contactno)) {
      } else {
        isproceed = false;
        toast.warning("Please Enter the Valid ContactNo");
      }
    }

    return isproceed;
  };

  //register with local storage

  const registerSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("user") === null) {
      if (Isvalidation()) {
        localStorage.setItem("user", JSON.stringify(input));
        toast.success("Registered Successfully :)");
        toast.success("Please Login User " + input.name);
        navigate("/login");
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
                onSubmit={registerSubmit}
              >
                <h2 className="text-center text-dark mt-5">Sign Up</h2>
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

                <div className="mb-3">
                  <label>
                    Email Address:<span className="errmsg">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    name="email"
                    value={input.email}
                    onChange={(e) => {
                      setInput({ ...input, [e.target.name]: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label>
                    Conatct No:<span className="errmsg">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp"
                    placeholder="Conatct No"
                    name="contactno"
                    value={input.contactno}
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
                    Register
                  </button>
                </div>

                <div
                  id="emailHelp"
                  className="form-text text-center mb-5 text-dark"
                >
                  <Link to={"/login"} className="btn btn-primary">
                    <span className="text-dark fw-bold"> Close</span>
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

export default Register;
