import React from "react";
import {  Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store"
import Base from './common/Base';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/home" className="navbar-brand">
          bezKoder
        </a>
        

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
          <li className="nav-item" >
            <Link to={"/signin"} className="nav-link">
              Signin
            </Link>
          </li>
          <li className="nav-item" >
            <Link to={"/signup"} className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item" >
            <Link to={"/about-us"} className="nav-link">
              About Us
            </Link>
          </li>
          
        </div>
      </nav>
      <div className="container mt-3">
        
      </div>
      <Provider store={store}>
        <Base />
      </Provider>
    </div>
    
  );
}
export default App;
