import { GET_ALL_DATA } from "../actions/fetchData";
import initialState from "../store/state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        users: action.data
      });
    default:
      return state;
  }
};

export default reducer;
