import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ValidationLogin";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          navigate("/");
        } else {
          alert("No record exitated");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 w-25 h-60 rounded">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              <strong>name</strong>
            </label>
            <input
              name="name"
              onChange={handleInput}
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              onChange={handleInput}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <div className="mb-3 d-grid gap-2">
            <button type="submit" name="" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="mb-3 d-grid gap-2">
            <Link
              to="/signup"
              type="button"
              name=""
              className="btn btn-secondary"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
