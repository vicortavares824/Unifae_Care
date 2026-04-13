import { Text, View, StyleSheet, KeyboardTypeOptions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import AnimatedInputBar from "@/componente/base/animated-input-bar";

interface BarraTopProps {
  title: string;
  description: string[];
  tipo?: KeyboardTypeOptions;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function Form({ title, description, tipo = 'email-address', icon }: BarraTopProps) {
  const [text, setText] = useState<string>("");
  const PLACEHOLDERS: string[] = description

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.texto}>{title}</Text>

        <View style={styles.inputContainer}>
          {icon && (
            <Ionicons
              name={icon}
              size={18}
              color={"#6e6e6e"}
              style={{ marginLeft: 15 }}
            />
          )}
          
          <View style={styles.divider} />

          <AnimatedInputBar
            placeholders={PLACEHOLDERS}
            value={text}
            animationInterval={900}
            onChangeText={setText}
            selectionColor={"#353535"}
            keyboardType={tipo}
            placeholderStyle={styles.placeholderStyle}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: '90%',
  },
  texto: {
    color: '#090D20',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 100,
    height: 56,
    borderWidth: 2,
    borderColor: '#dddfe7ff',
  },
  divider: {
    width: 1,
    backgroundColor: "#dddfe7ff",
    height: 20,
    marginLeft: 12,
    marginRight: 5,
  },
  placeholderStyle: {
    fontFamily: "SfProRounded",
    fontSize: 16,
    color: "#999",
  }
});
