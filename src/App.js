import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import background from "./static/home_background.png";
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SearchComponent from "./pages/Search";
import ErrorComponent from "./pages/Error";
import withNavigation from "./components/WithNavigation";
import withParams from "./components/withParams";
import Header from "./components/Headers";

const LoginComponentWithNavigation = withNavigation(Signin);
const SearchComponentWithParams = withParams(SearchComponent);

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/sign-in" element={<LoginComponentWithNavigation />} />
        <Route path="/search/:name" element={<SearchComponentWithParams />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
