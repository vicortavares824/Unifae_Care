import React, { useState } from "react";
import Check from "@/componente/base/checkbox";
import Botao from "@/componente/base/button";
import { StyleSheet, Text, View } from "react-native";
import BarraTop from "@/componente/base/barra-top";
import Form from "@/componente/organisms/form";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router/Router";
import { theme } from "@/styles/global";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    navigation.navigate("Home");
    
  };

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
          <BarraTop title='Logar Em Sua Conta' description='Faça o Login' />
          <Form title='Email' description={['Email','E-mail','e-mail']} icon='mail-outline' />
          <Form title='Senha' description={['Senha','Pass','Password']} tipo="numeric" icon='lock-closed-outline' />
          <Check title='Lembrar de mim' description='Recuperar Senha' Navegacao="RepSenha" />
          <View style={{ paddingBottom: 50 }}>
            <Botao
              backgroundColor={theme.colors.primary}
              width={270}
              isLoading={isLoading}
              onPress={handleLogin}
              loadingText="Entrando..."
              showLoadingIndicator
              style={{ alignSelf: 'center' }}>
              <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>Entrar</Text>
            </Botao>
          </View>
        </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: theme.colors.border,
    borderWidth: 0.7,
    backgroundColor: theme.colors.background,
    width: '90%',
    height: 530,
  },
  fundo: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  }
})