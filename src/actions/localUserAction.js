import { FETCH_LOCAL_USER, EMPTY_LOCAL_USER } from "../actions/types";

import { AsyncStorage, ToastAndroid } from "react-native";

export const fetchLocalUser = () => dispatch => {
  AsyncStorage.getItem("user_data", (err, users) => {
    if (users !== null) {
      const data = JSON.parse(users);
      dispatch({ type: FETCH_LOCAL_USER, payload: data });
    } else {
      dispatch({ type: EMPTY_LOCAL_USER });
    }
  });
};

export const deleteLocalUser = userId => dispatch => {
  AsyncStorage.getItem("user_data", (err, users) => {
    if (users !== null) {
      const data = JSON.parse(users);

      // remove single user from all user
      //  const userItems = data.splice(data.findIndex(x => x.id === userId), 1);
      const userItems = data.filter(function (e) { return e.id !== userId });
      AsyncStorage.removeItem('user_data');
      //storing modified data (user removed)
      if (userItems.length !== 0) {
        AsyncStorage.setItem("user_data", JSON.stringify(userItems), () => {
          ToastAndroid.show("User Deleted Successfully !", ToastAndroid.SHORT);
        });
      }
      AsyncStorage.getItem("user_data", (err, users) => {
        if (users !== null) {
          const data = JSON.parse(users);
          dispatch({ type: FETCH_LOCAL_USER, payload: data });
        } else {
          dispatch({ type: EMPTY_LOCAL_USER });
        }
      });
    } else {
      ToastAndroid.show("User not found of this Id !", ToastAndroid.SHORT);
    }
  });
};
