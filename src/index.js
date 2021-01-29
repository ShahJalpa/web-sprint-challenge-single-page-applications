import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router} from 'react-router-dom' //imported Router
import App from "./App";

ReactDOM.render(
    //wrap the <App /> in a provider Router //<---STEP 1--->
    <Router>
        <App />
    </Router>,
    document.getElementById("root"));
