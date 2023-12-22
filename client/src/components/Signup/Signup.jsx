import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ValidationSignup";
import axios from "axios";
function Signup() {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // biến lưu trữ lỗi
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // Xử lý nhập
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    axios
      .post("http://localhost:8081/signup", values)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 w-25 h-60 rounded">
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              onChange={handleInput}
              type="name"
              className="form-control"
              name="name"
              id=""
              placeholder="Enter name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email address</strong>
            </label>
            <input
              onChange={handleInput}
              type="email"
              className="form-control"
              name="email"
              id=""
              placeholder="Enter email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              onChange={handleInput}
              type="password"
              className="form-control"
              name="password"
              id=""
              placeholder="Enter password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <div className="mb-3 d-grid gap-2">
            <button type="submit" name="" className="btn btn-primary">
              Signup
            </button>
          </div>
          <div className="mb-3 d-grid gap-2">
            <Link
              to="/login"
              type="button"
              name=""
              className="btn btn-secondary"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
