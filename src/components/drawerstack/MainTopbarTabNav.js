import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import GLOBALS from "../common/Global_Constant";

//screens
import HelpScreen from "../screens/HelpScreen";
import serverUserScreen from "../screens/serverUserScreen";
import localUserScreen from "../screens/localUserScreen";

const MainTopbarTabNav = createMaterialTopTabNavigator(
  {
    Home: {
      screen: serverUserScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Server User"
      })
    },
    Favorite: {
      screen: localUserScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Local User"
      })
    },  
  },
  {
    initialRouteName: "Home",
    backBehavior: "initialRoute",
    lazy: true,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      scrollEnabled: true,
      activeBackgroundColor: GLOBALS.DefaultTheme.BottomTabActiveBgClr,
      activeTintColor: GLOBALS.DefaultTheme.BottomTabActiveTextClr,
      inactiveTintColor: "#ffe",
      labelStyle: {
        fontSize: 15,
        color: "#fff",
        fontFamily: GLOBALS.DefaultTheme.menuFont,
      },
      style: {
        backgroundColor: "#09B070",
        height: 45,
        marginVertical: -1
      }
    }
  }
);
export default MainTopbarTabNav;
