import React, { useState } from "react";
import Check from "@/componente/base/checkbox";
import Botao from "@/componente/base/button";
import { StyleSheet, Text, View } from "react-native";
import BarraTop from "@/componente/base/barra-top";
import Form from "@/componente/organisms/form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router/Router";
import { theme } from "@/styles/global";
import { api } from "@/api/api";
import { AxiosError } from "axios";

export default function Login() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    const payload = {
      email,
      password,
      accessMode: "APP",
      appId: 1,
    };

    console.log("Login payload:", payload); // Log do payload para depuração

    try {
      const result = await api.post("v1/auth/login", payload);

      if (result.status === 200) {
        setIsLoading(false);
        AsyncStorage.setItem("TOKEN", result.data.access_token);
        AsyncStorage.setItem("CURRENT_USER", JSON.stringify(result.data.user));
        navigation.navigate("Home");
      }
    } catch (e) {
      const error = e as AxiosError;
      console.error(`Login error: ${error.message}`);
    }

    //Fallback simulando login bem-sucedido devido à falta da API
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Home");
    }, 2000);
  };

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <BarraTop title="Logar Em Sua Conta" description="Faça o Login" />
        <Form
          title="Email"
          description={["Email", "E-mail", "e-mail"]}
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />
        <Form
          title="Senha"
          description={["Senha", "Pass", "Password"]}
          tipo="numeric"
          icon="lock-closed-outline"
          value={password}
          onChangeText={setPassword}
        />
        <Check
          title="Lembrar de mim"
          description="Recuperar Senha"
          Navegacao="RepSenha"
          checked={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
        />
        <View style={{ paddingBottom: 50 }}>
          <Botao
            backgroundColor={theme.colors.primary}
            width={270}
            isLoading={isLoading}
            onPress={handleLogin}
            loadingText="Entrando..."
            showLoadingIndicator
            style={{ alignSelf: "center" }}
          >
            <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
              Entrar
            </Text>
          </Botao>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: theme.colors.border,
    borderWidth: 0.7,
    backgroundColor: theme.colors.background,
    width: "90%",
    height: 530,
  },
  fundo: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.primary,
    alignItems: "center",
  },
});
