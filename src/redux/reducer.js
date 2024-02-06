const reducer = (
  state = {
    checkBox: [true, true, true, true, true],
    tickets: [],
    pageSize: 5,
    loading: false,
    tabs: false,
    buttons: [true, false, false],
  },
  action,
) => {
  switch (action.type) {
    case "TABS": {
      const id = +action.payload;
      if (id === 0) {
        const sortPrice = state.tickets.sort((a, b) => a.price - b.price);
        return { ...state, tickets: sortPrice, buttons: [true, false, false] };
      }

      if (id === 1) {
        const sortSpeed = state.tickets.sort((a, b) => {
          const durationA = a.segments[0].duration + a.segments[1].duration;
          const durationB = b.segments[0].duration + b.segments[1].duration;
          return durationA - durationB;
        });
        return { ...state, tickets: sortSpeed, buttons: [false, true, false] };
      }
      if (id === 2) {
        const sortOptimal = state.tickets.sort((a, b) => {
          const optimalA =
            a.price +
            a.segments[0].stops.length +
            a.segments[0].duration +
            a.segments[1].duration;
          const optomalB =
            b.price +
            b.segments[0].stops.length +
            b.segments[0].duration +
            b.segments[1].duration;
          return optimalA - optomalB;
        });
        return {
          ...state,
          tickets: sortOptimal,
          buttons: [false, false, true],
        };
      }
      return { ...state };
    }
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SHOW_MORE":
      return { ...state, pageSize: state.pageSize + 5 };

    case "ADD_TICKETS":
      return { ...state, tickets: action.payload };

    case "CHECK_BOX_CLICK":
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

    default:
      return state;
  }
};
export default reducer;
