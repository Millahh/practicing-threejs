/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
// should use double quotation mark
import { BasicCanvas, BasicUseFrame }  from "./exploring-threejs";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasicCanvas />
    {/* <BasicUseFrame /> */}
  </React.StrictMode>,
)
