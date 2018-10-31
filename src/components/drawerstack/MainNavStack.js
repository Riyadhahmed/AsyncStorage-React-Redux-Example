import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import MainTopbarTabNav from "./MainTopbarTabNav";

const MainNavStack = createStackNavigator(
  {
    Home: {
      screen: MainTopbarTabNav,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Text style={{color:'#fff', fontSize:20,}}> AsyncStorage</Text>,
        headerStyle: { height: 55, backgroundColor: '#03284A' },
      })
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "screen"
  }
);
export default MainNavStack;
