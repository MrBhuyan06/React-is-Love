const reducers = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userInfo: { ...state.userInfo, name: action.payload },
      };

    default:
      break;
  }
};
export default reducers;
