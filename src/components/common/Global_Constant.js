import React from "react";
import { Dimensions } from "react-native";

const SITE_URL = "http://dainikazadi.net/";
const LOCAL_URL = "http://127.0.0.0:80/azadi/wp-json/myapi/v2/";
const LIVE_URL = "http://dainikazadi.net/wp-json/myapi/v2/";
const TEST_URL = "http://azadi.w3xplorers.com/wp-json/myapi/v2/";
//const PREVIEW_IMAGE = require("../../assets/logo/azadi_logo.png");

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

export default {
  BASE_URL: SITE_URL,
  WP_API_URL: LIVE_URL,
 // preview_image: PREVIEW_IMAGE,
  DefaultTheme: {
    // Activity indicator
    ActivityClr: "#00b386",
    ActivitySize: 40,

    // font family

    titleFont : "SolaimanLipi",
    detailsFont : "SolaimanLipi",
    dateFont : "SolaimanLipi",
    menuFont : "SolaimanLipi",

    // Card/Block  
    BgClr: "#fff",
    TextClr: "#262626",
    BlockTitleClr: "#262626",
    BlockBgClr: "#fff",

    // Post/News
    PostTitleClr: "#262626",
    PostDClr: "#1e1e1e",
    PostDateClr: "#999999",
    PostGridTextSize: 18,
    PostColumnGridTextSize: 16,
    PostBLTextSize: 16,
    PostBLDateTextSize: 12,

    // Header
    HeaderBgClr: "#00b386",
    HeaderTextClr: "#fff",
    HeaderTextSize: 18,

    // Bottom Tab Bar
    BottomTabActiveBgClr: "#fff",
    BottomTabActiveTextClr: "#111",

    // Top Tab bar
    TopTabActiveBGClr: "#00b386",
    TopTabActiveTintClr: "#fff",
    TopTabInactiveTintClr: "#f2f2f2",

    // popup menu

    PopBgClr: "#f4f4f4",
    PopTextClr: "#1e1e1e",
    PopTextSize: 14,
    PopBorderClr: "#ededed",

    // Block List
    BLImageWidth: 110,
    BLImageHeight: 90,

    // Block Grid
    BGridImageWidth: ScreenWidth,
    BGridImageHeight: 180
  }
};
