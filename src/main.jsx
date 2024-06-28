/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { BasicCanvas, BasicUseFrame }  from "./exploring-threejs";
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicCanvas />
    <hr></hr>
    <BasicUseFrame />
  </React.StrictMode>,
)

