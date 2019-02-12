import { SET_ACTIVE } from "./actions";

const setActiveProject = id => {
  return {
    type: SET_ACTIVE,
    id
  };
};

export default setActiveProject;
