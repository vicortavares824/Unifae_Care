import {
  View,
  StyleSheet,
  Text,
  type ViewStyle,
  type StyleProp,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@/componente/base/button";

interface BotaoProps {
  title: string;
  onPress?: () => void;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

export default function Botao({
  title,
  onPress,
  isLoading,
  style,
}: BotaoProps) {
  return (
    <View style={style}>
      <Button
        loadingText="Carregando..."
        isLoading={isLoading}
        onPress={onPress}
        showLoadingIndicator
      >
        <View style={styles.btn}>
          <Ionicons name="arrow-forward" size={18} color="black" />
          <Text style={styles.btnText}>{title}</Text>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 16,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
    fontFamily: "SfProRounded",
  },
});
