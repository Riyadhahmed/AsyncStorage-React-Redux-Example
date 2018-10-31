import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HelpScreen = props => {
  return (
      <View style={styles.Container}>
        <Text>This is Help Page</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    flexDirection: "row"
  }
});

export default HelpScreen;
