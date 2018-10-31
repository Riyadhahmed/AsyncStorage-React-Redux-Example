import { FETCH_LOCAL_USER, EMPTY_LOCAL_USER } from "../actions/types";

const initialState = {
  localUserList: [],
  localUserLoading: true,
  emptyLocalUser : true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EMPTY_LOCAL_USER:
      return {
        ...state,
        emptyLocalUser: true,
        localUserLoading: false
      };
  
    case FETCH_LOCAL_USER:
      return {
        ...state,
        localUserList: action.payload,
        localUserLoading: false,
        emptyLocalUser: false,
      }; 
    default:
      return state;
  }
}
