import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
         <App />
         {/* toast add krva toastcontainer add krvu ahiya important che  and css file import krvi imp che*/}
         <ToastContainer/>
    </div>
   
  
);
