
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import GooeySwitch from "@/componente/micro-interactions/gooey-switch";

export default function App() {
 

  const launchDate = new Date("2026-07-20T14:30:00");

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <GooeySwitch
          activeColor="#8369f5"
          size={200}
          trackColor="#1a1a1a"
          gooey={35}
          deformation={{
            squishY: 0.5,
            stretchX: 1.2,
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  content: {
    alignItems: "center",
    gap: 24,
    top: 80,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#555",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  date: {
    fontSize: 15,
    color: "#333",
    marginTop: 8,
  },
});
