import {
  FETCH_SERVER_USER, ADD_USER
} from "../actions/types";

const initialState = {
  userList: [],
  userLoading: true
};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_SERVER_USER:
      return {
        ...state,
        userList: action.payload,
        userLoading: false
      };

    case ADD_USER: {
      let userList = cloneObject(state.userList) //clone the current state
      userList.unshift(action.user); //add the new quote to the top
      state = Object.assign({}, state, { userList: userList });
      return state;
    }
    default:
      return state;
  }
}
