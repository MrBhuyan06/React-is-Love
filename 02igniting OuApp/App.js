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
const h1 = React.createElement(
  "h1",
  {
    className: "h1",
    style: {
      color: "red",
    },
  },
  "❤️ Love With React 🚀"
);

console.log(h1);

const p = React.createElement("p", {}, "Learn With Us is Amazing 🥳");
console.log(p);
const div = React.createElement(
  "div",
  {
    className: "Container",
  },
  [h1, p]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
