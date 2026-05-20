import { api } from "@/api/api";
import RepTop from "@/comp/RepTop";
import Botao from "@/componente/base/button";
import Form from "@/componente/organisms/form";
import { theme } from "@/styles/global";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FadeText } from "../componente/organisms/fade-text";

export default function RepSenha() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handlePasswordRecovery = async () => {
    setIsLoading(true);

    const payload = {
      email,
    };

    console.log("Password recovery payload:", payload);

    try {
      const result = await api.post("v1/auth/forgot-password", payload);
      console.log("Password recovery result:", result.data);
    } catch (e) {
      setIsLoading(false);
      const error = e as AxiosError;
      console.error(`Error: ${error.message}`);
    }
  };

  const INPUTS: string[] = [
    "Por motivo de segurança, o codigo de ",
    "recuperação tem validade de 15 minutos.",
    "verifique sua caixa de entrada e spam.",
  ];
  const INPUTS2: string[] = ["Informações de Importantes"];

  return (
    <View style={styles.fundo}>
      <RepTop />
      <View style={styles.container}>
        <Form
          title="ENDEREÇO DE EMAIL"
          description={["Email", "E-mail", "e-mail"]}
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />
        <View style={{ paddingBottom: 50 }}>
          <Botao
            backgroundColor={theme.colors.primary}
            width={270}
            isLoading={isLoading}
            onPress={handlePasswordRecovery}
            loadingText="Enviando..."
            showLoadingIndicator
            style={{ alignSelf: "center" }}
          >
            <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
              Enviar Codigo De Recuperção
            </Text>
          </Botao>
        </View>
      </View>
      <View style={styles.container2}>
        <GestureHandlerRootView>
          <FadeText
            inputs={INPUTS2}
            duration={3500}
            wordDelay={300}
            blurTint="extraLight"
            style={{
              fontFamily: "SfProRounded",
              fontSize: 15,
              color: "#000000ff",
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
              fontSize: 14,
              color: "#242424ff",
            }}
          />
        </GestureHandlerRootView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  fundo: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.primary,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  container: {
    alignItems: "center",
    borderRadius: 20,
    borderColor: theme.colors.border,
    borderWidth: 0.7,
    backgroundColor: theme.colors.background,
    width: "90%",
    height: 250,
    paddingTop: 40,
  },
  container2: {
    borderRadius: 20,
    borderColor: theme.colors.border,
    borderWidth: 0.7,
    backgroundColor: theme.colors.Background2,
    width: "90%",
    height: 160,
    paddingTop: 20,
  },
});
