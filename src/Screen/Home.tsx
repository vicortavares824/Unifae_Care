import React from "react";
import { View, StyleSheet } from "react-native";
import CompHeader from "@/comp/CompHeader";
import { theme } from "@/styles/global";

export default function Home() {
 

  return (
    <View style={styles.container}>
      <CompHeader/>

       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    flexDirection: "column",
  },
});