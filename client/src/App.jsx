import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layoutAdmin/Layout";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Category from "./components/pages/category/Category";
import Users from "./components/pages/user/Users";
import LayoutHome from "./components/layout/layoutHome/LayoutHome";
import Hero from "./components/pages/Hero/Hero";
import Programs from "./components/pages/Programs/Programs";
import Reasons from "./components/pages/Reasons/Reasons";
import Testimonials from "./components/pages/Testimonials/Testimonials";
import Plans from "./components/pages/Plans/Plans";
import Join from "./components/pages/Join/Join";
import Footer from "./components/pages/Footer/Footer";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="category" element={<Category />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<LayoutHome />}>
          <Route path="hero" element={<Hero />}></Route>
          <Route path="programs" element={<Programs />}></Route>
          <Route path="reasons" element={<Reasons />}></Route>
          <Route path="plans" element={<Plans />}></Route>
          <Route path="testimonials" element={<Testimonials />}></Route>
          <Route path="join" element={<Join />}></Route>
          <Route path="footer" element={<Footer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
