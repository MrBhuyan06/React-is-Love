import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import StateProvider from "./context/stateProvider.js";
const App = () => {
  return (
    <StateProvider>
      <Header />
      <Body />
      <Footer />
    </StateProvider>
  );
};

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
