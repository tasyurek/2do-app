import { CREATE_CARD, DELETE_CARD } from "../actions/actions";

const cards = [
  { id: 1, pId: 1, title: "Todo" },
  { id: 2, pId: 1, title: "In Progress" },
  { id: 4, pId: 2, title: "Done" },
  { id: 5, pId: 2, title: "p2todo" }
];

const cardReducer = (state = cards, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return [
        ...state,
        { id: action.id, pId: action.pId, title: action.title }
      ];

    case DELETE_CARD:
      let newState = state.filter(card => card.id !== action.id);
      return [...newState];

    default:
      return state;
  }
};
export default cardReducer;
