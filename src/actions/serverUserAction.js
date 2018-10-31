import { FETCH_SERVER_USER, FETCH_LOCAL_USER } from "../actions/types";

import { AsyncStorage, ToastAndroid } from "react-native";

export const fetchUser = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(userList =>
      dispatch({
        type: FETCH_SERVER_USER,
        payload: userList
      })
    )
    .catch();
};

export const createUser = usersItem => dispatch => {
  const newUser = {
    id: usersItem.id,
    name: usersItem.name,
    email: usersItem.email
  };
  AsyncStorage.getItem("user_data", (err, users) => {
    if (users !== null) {
      const data = users ? JSON.parse(users) : [];
      data.push(newUser);

      //storing data
      AsyncStorage.setItem("user_data", JSON.stringify(data), () => {
        // dispatch
        dispatch({ type: FETCH_LOCAL_USER, payload: data });
        ToastAndroid.show("User Added Successfully !", ToastAndroid.SHORT);
      });
    } else {
      const data = users ? JSON.parse(users) : [];
      data.push(newUser);

      //storing data
      AsyncStorage.setItem("user_data", JSON.stringify(data), () => {
        // dispatch
        dispatch({ type: FETCH_LOCAL_USER, payload: data });
        ToastAndroid.show("User Added Successfully !", ToastAndroid.SHORT);
      });
    }
  });
};

export const checkUserExists = usersItem => dispatch => {
  const userId = usersItem.id;

  AsyncStorage.getItem("user_data", (err, users) => {
    if (users !== null) {
      const data = JSON.parse(users);
      //  const userItems = data.splice(data.findIndex(x => x.id === userId), 1);
      const userExists = data.filter(function(e) {
        return e.id === userId;
      });

      if (userExists.length == 1) {
        ToastAndroid.show("User already exists !", ToastAndroid.SHORT);
      } else {
        dispatch(createUser(usersItem));
      }
    } else {
      dispatch(createUser(usersItem));
    }
  });
};
