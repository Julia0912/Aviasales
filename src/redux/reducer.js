const reducer = (
  state = {
    checkBox: [false, false, false, false, false],
    tickets: [],
  },
  action,
) => {
  if (action.type === "ADD_TICKETS") {
    state.tickets = action.payload;
  }
  if (action.type === "CHECK_BOX_CLICK") {
    const id = +action.payload;

    if (id === 0) {
      let filledArray;

      state.checkBox[0]
        ? (filledArray = Array(5).fill(false))
        : (filledArray = Array(5).fill(true));

      return { ...state, checkBox: filledArray };
    } else {
      const stateCopy = [...state.checkBox];

      stateCopy[id] = !state.checkBox[id];

      stateCopy[1] && stateCopy[2] && stateCopy[3] && stateCopy[4]
        ? (stateCopy[0] = true)
        : (stateCopy[0] = false);

      return { ...state, checkBox: stateCopy };
    }
  }

  return state;
};
export default reducer;
