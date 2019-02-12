import { CREATE_PROJECT, SET_ACTIVE } from "../actions/actions";

const projects = [
  {
    id: 1,
    title: "Working front-end",
    active: true
  },
  {
    id: 2,
    title: "New Shopping Website",
    active: false
  },
  {
    id: 3,
    title: "graphQL Project",
    active: false
  },
  {
    id: 4,
    title: "Homework",
    active: false
  }
];

const projectReducer = (state = projects, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return [...state, { id: action.id, title: action.title }];
    case SET_ACTIVE:
      let newState = state.map(project => {
        return { ...project, active: false };
      });
      newState = newState.map(project => {
        return project.id === action.id
          ? { ...project, active: true }
          : project;
      });
      return newState;

    default:
      return state;
  }
};

export default projectReducer;
