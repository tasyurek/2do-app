import { ADD_TODO, DELETE_TODO } from "../actions/actions";

const todos = [
  { id: 1, cardId: 1, content: "Learn JavaScript" },
  { id: 2, cardId: 1, content: "Learn React" },
  { id: 3, cardId: 2, content: "Learn Redux" }
];

const todoReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        cardId: action.cardId,
        content: action.content
      };
      return [...state, newTodo];

    case DELETE_TODO:
      let newTodos = state.filter(todo => todo.id !== action.id);
      return [...newTodos];

    default:
      return state;
  }
};

export default todoReducer;
