export default class ApiService {
  async getSearchId() {
    const url = `https://aviasales-test-api.kata.academy/search`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`NONONO ${url}`);
    }
    return await res.json();
  }
  async getTickets() {
    const res = await this.getSearchId();
    const searchId = res.searchId;
    const tickets = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );

    const ticketsRes = await tickets.json();

    return ticketsRes;
  }
}
// const api = new ApiService();
// api.getSearchId().then((body) => {});
// api.getTickets().then((p) => {});
