export const checkBoxClick = (id) => {
  return { type: "CHECK_BOX_CLICK", payload: id };
};
export const addTickets = (tickets) => {
  return { type: "ADD_TICKETS", payload: tickets };
};
