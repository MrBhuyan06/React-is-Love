import React from "react";
import ReactDOM from "react-dom/client.js";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import ItemCart from "./components/ItemCart.js";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cart",
        element: <ItemCart />,
      },

      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
