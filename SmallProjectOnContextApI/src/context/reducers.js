const reducers = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userInfo: { ...state.userInfo, name: action.payload },
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    default:
      break;
  }
};
export default reducers;
