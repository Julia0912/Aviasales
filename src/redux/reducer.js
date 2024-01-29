const reducer = (
  state = {
    checkBox: {
      all: false,
      withoutTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
    },
  },
  action,
) => {
  if (action.type === "CHECK_BOX_CLICK") {
    if (
      state.checkBox.oneTransfer &&
      state.checkBox.twoTransfers &&
      state.checkBox.threeTransfers &&
      state.checkBox.withoutTransfers
    ) {
      return (state = {
        checkBox: {
          all: true,
          withoutTransfers: true,
          oneTransfer: true,
          twoTransfers: true,
          threeTransfers: true,
        },
      });
    }
    if (action.payload === "1") {
      for (let key in state.checkBox) {
        if (state.checkBox[key]) {
          return (state = {
            checkBox: {
              all: false,
              withoutTransfers: false,
              oneTransfer: false,
              twoTransfers: false,
              threeTransfers: false,
            },
          });
        }
      }
      return (state = {
        checkBox: {
          all: true,
          withoutTransfers: true,
          oneTransfer: true,
          twoTransfers: true,
          threeTransfers: true,
        },
      });
    }

    if (action.payload === "2") {
      for (let key in state.checkBox) {
        if (state.checkBox[key]) {
          return (state = {
            checkBox: {
              all: false,
              withoutTransfers: !state.checkBox.withoutTransfers,
              oneTransfer: state.checkBox.oneTransfer,
              twoTransfers: state.checkBox.twoTransfers,
              threeTransfers: state.checkBox.threeTransfers,
            },
          });
        }
      }
      return (state = {
        checkBox: {
          all: false,
          withoutTransfers: true,
          oneTransfer: false,
          twoTransfers: false,
          threeTransfers: false,
        },
      });
    }
    if (action.payload === "3") {
      for (let key in state.checkBox) {
        if (state.checkBox[key]) {
          return (state = {
            checkBox: {
              all: false,
              withoutTransfers: state.checkBox.withoutTransfers,
              oneTransfer: !state.checkBox.oneTransfer,
              twoTransfers: state.checkBox.twoTransfers,
              threeTransfers: state.checkBox.threeTransfers,
            },
          });
        }
      }
      return (state = {
        checkBox: {
          all: false,
          withoutTransfers: false,
          oneTransfer: true,
          twoTransfers: false,
          threeTransfers: false,
        },
      });
    }
    if (action.payload === "4") {
      for (let key in state.checkBox) {
        if (state.checkBox[key]) {
          return (state = {
            checkBox: {
              all: false,
              withoutTransfers: state.checkBox.withoutTransfers,
              oneTransfer: state.checkBox.oneTransfer,
              twoTransfers: !state.checkBox.twoTransfers,
              threeTransfers: state.checkBox.threeTransfers,
            },
          });
        }
      }
      return (state = {
        checkBox: {
          all: false,
          withoutTransfers: false,
          oneTransfer: false,
          twoTransfers: true,
          threeTransfers: false,
        },
      });
    }
    if (action.payload === "5") {
      for (let key in state.checkBox) {
        if (state.checkBox[key]) {
          return (state = {
            checkBox: {
              all: false,
              withoutTransfers: state.checkBox.withoutTransfers,
              oneTransfer: state.checkBox.oneTransfer,
              twoTransfers: state.checkBox.twoTransfers,
              threeTransfers: !state.checkBox.threeTransfers,
            },
          });
        }
      }

      return (state = {
        checkBox: {
          all: false,
          withoutTransfers: false,
          oneTransfer: false,
          twoTransfers: false,
          threeTransfers: true,
        },
      });
    }
  }

  return state;
};
export default reducer;
