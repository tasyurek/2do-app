import { FILTER_PROJECT } from "./actions";

const projectFilter = id => {
  return {
    type: FILTER_PROJECT,
    id
  };
};

export default projectFilter;
