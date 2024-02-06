export const checkBoxClick = (id) => {
  return { type: "CHECK_BOX_CLICK", payload: id };
};
export const addTickets = (tickets) => {
  return { type: "ADD_TICKETS", payload: tickets };
};
export const showMore = (pageSize) => {
  return { type: "SHOW_MORE", payload: pageSize };
};
export const loading = (loading) => {
  return { type: "LOADING", payload: loading };
};
export const tabs = (id) => {
  return { type: "TABS", payload: id };
};
