import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Favorite from "./components/Favorite.js";
import { Provider } from "react-redux";
import store from "./constants/slice.js";

const APP = () => {
  return (
    <Provider store={store}>
      <Header />
      <Hero />
      <Favorite />
    </Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP />);
