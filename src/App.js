import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import background from "./static/home_background.png";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Search from "./pages/Search";
import ErrorComponent from "./pages/Error";
import withNavigation from "./components/WithNavigation";

const LoginComponentWithNavigation = withNavigation(Signin);

const App = () => (
  <div
    className="app"
    style={{
      backgroundImage: `url(${background})`,
      height: "950px",
      backgroundSize: "100% 100%",
    }}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<LoginComponentWithNavigation />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
