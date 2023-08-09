import React from "react";
import { useStateValue } from "../context/Provider.js";
const Card = ({ res }) => {
  const {
    state: { cart },
    dispatch,
  } = useStateValue();
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="w-full">
        <img src={res.cover} className="w-28" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{res.tittle}</h2>

        <div className="card-actions justify-end">
          {cart.some((c) => c.id === res.id) ? (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: res,
                });
              }}
              className="btn btn-primary"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: res,
                });
              }}
              className="btn btn-primary"
            >
              AddCart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
