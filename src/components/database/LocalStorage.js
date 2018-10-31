import {AsyncStorage} from "react-native";

export const createCategory = users => new Promise((resolve, reject) => {
    AsyncStorage.getItem('user', (err, users) => {
        if (users !== null){
            users = JSON.parse(users);
            users.unshift(quote); //add the new quote to the top
            AsyncStorage.setItem('data', JSON.stringify(users), () => {
                dispatch({type: ADD_QUOTE, quote:quote});
            });
        }
});
});