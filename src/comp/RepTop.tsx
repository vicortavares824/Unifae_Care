import { theme } from "@/styles/global";
import { Image, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FadeText } from "../componente/organisms/fade-text";
import CompVoltar from "./CompVoltar";

export default function RepTop(): React.JSX.Element {
  const INPUTS: string[] = [
    "Insira seu e-mail",
    "Para receber um codigo de 8",
    "Digitos para redefinir sua conta",
  ];
  const INPUTS2: string[] = ["Recuperar senha"];

  return (
    <GestureHandlerRootView style={styles.container}>
      <CompVoltar tile="UNIFAE Care" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/Fae_Logo.jpg")}
          style={styles.logo}
        />
        <FadeText
          inputs={INPUTS2}
          duration={3500}
          wordDelay={300}
          blurTint="extraLight"
          style={{
            fontFamily: "SfProRounded",
            fontSize: 24,
            color: theme.colors.white,
            fontWeight: "bold",
          }}
        />
        <FadeText
          inputs={INPUTS}
          duration={3500}
          wordDelay={300}
          blurTint="extraLight"
          style={{
            fontFamily: "SfProRounded",
            fontSize: 18,
            color: theme.colors.white,
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
