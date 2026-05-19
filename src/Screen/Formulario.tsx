import { theme } from "@/styles/global";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Login from "../Screen/Login";
export default function Formulario() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seja Bem-vindo</Text>
        <Text style={styles.title}>A UNIFAE Care</Text>
      </View>
      <Login />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
    zIndex: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.white,
    textAlign: "center",
  },
});
