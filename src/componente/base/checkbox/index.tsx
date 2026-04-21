import { View, Text, Pressable, StyleSheet,TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useState } from "react";
import CheckBox from "@/componente/organisms/check-box";
import { theme } from "@/styles/global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../router/Router";
interface CheckProps{
  title: string;
  description: string;
  Navegacao?: keyof RootStackParamList;
}


export default function Check({title, description,Navegacao}: CheckProps) {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Pressable onPress={() => setChecked(!checked)} style={styles.card}>
          <View style={styles.checkContent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.checkbox}>
              <CheckBox
                checked={checked}
                checkmarkColor="#000000ff"
                stroke={5}
                size={30}
              />
            </View>
          </View>
        </Pressable>

        <TouchableOpacity style={styles.forgotPassword}  onPress={() => {if (Navegacao) {navigation.navigate(Navegacao);} else {alert('Navegação não definida');}}}>
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
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
  },
  checkContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: "500",
    fontFamily: "HelveticaNowDisplay",
  },
  forgotPassword: {
    marginLeft: 'auto',
  },
  link: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "HelveticaNowDisplay",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});
