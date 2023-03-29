// const h1 = document.createElement("h1");
// h1.textContent = "❤️ Love With React 🚀";

// console.log(h1);

// document.querySelector(".root").appendChild(h1);

// what is diff btw a production level app and app running in local

// mainfest file
//optimised code
// clean clone
// compression

// Bundlers - web pack and vite and parcel
// parcel
//React - core Lib Of React
//ReactDOM - Version of Web

import React from "react";
import ReactDOM from "react-dom/client.js";

const h1 = React.createElement(
  "h1",
  { className: "heading" },
  "React is Love and i love React❤️"
);
console.log(h1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);
