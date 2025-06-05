import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
         <App />
         {/* toast add krva toastcontainer add krvu ahiya important che  and css file import krvi imp che*/}
         <ToastContainer/>
    </div>
   
  
=======

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
>>>>>>> 0d724c905e9f06018547c00c37a6a4197c585379
);
