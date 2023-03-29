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

// ReactElement=>object=>Html(dom)

//jsx=>ReactElemnt=>Object=>Html(dom)

//componets are class and functional based

// const h1 = React.createElement(
//   "h1",
//   { className: "heading", key: "h1" },
//   "React is Love "
// );
const Tittle = () => <h1 key="h1">React is Love</h1>;
// console.log(h1);

const HeadinCompents = () => {
  return (
    <div>
      <Tittle />
      <h1 key="h2">Hello From Functional compents</h1>
      <h2 key="h3">Hello World</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadinCompents />);
