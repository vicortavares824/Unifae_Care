import { View, Text, Pressable, StyleSheet,TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import CheckBox from "@/componente/organisms/check-box";
interface CheckProps{
  title: string;
  description: string;
}

export default function Check({title, description}: CheckProps) {
  const [checked, setChecked] = useState(false);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Pressable onPress={() => setChecked(!checked)} style={styles.card}>
          <View style={styles.checkContent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.checkbox}>
              <CheckBox
                checked={checked}
                checkmarkColor="#00000065"
                stroke={5}
                size={30}
              />
            </View>
          </View>
        </Pressable>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.link}>{description}</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  checkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: "#090D20",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "HelveticaNowDisplay",
  },
  forgotPassword: {
    marginLeft: 'auto',
    paddingRight: 28,
  },
  link: {
    color: "#8369f5",
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "HelveticaNowDisplay",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: "rgba(131, 19, 196, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c7c6c6ff",
  },
});
