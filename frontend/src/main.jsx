// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./index.css";

// const rootElement = document.getElementById("root");

// // Using createRoot for React 18+
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);

//?

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// // import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />

//     {/* <Custom_hhok/> */}
//   </React.StrictMode>
// );

// import React from "react";
// import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "./index.css";

// const rootElement = document.getElementById("root");

// // Using createRoot for React 18+
// const root = createRoot(rootElement);
// root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
