import React, { useState } from "react";
import Check from "@/componente/base/checkbox";
import Botao from "@/componente/base/button";
import { StyleSheet, Text, View } from "react-native";
import BarraTop from "@/componente/base/barra-top";
import Form from "@/componente/organisms/form";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router/Router";

export default function Cadastro() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Login");
    }, 1500);
  };

  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
        <View style={{paddingLeft: 25}}>
          <BarraTop title='Faça seu cadastro' description='Seus dados estarão seguros' />
          <Form title='Nome' description={['Nome','Name','nome']} icon='person-outline' />
          <Form title='Email' description={['Email','E-mail','e-mail']} icon='mail-outline' />
          <Form title='Senha' description={['Senha','Pass','Password']} tipo="numeric" icon='lock-closed-outline' />
          <Check title='Aceitar os termos' description='Termos de uso' />
          <View style={{ paddingBottom: 30 }}>
            <Botao
              backgroundColor="#8369f5"
              width={300}
              isLoading={isLoading}
              onPress={handleLogin}
              loadingText="Cadastrando..."
              showLoadingIndicator
              style={{ alignSelf: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Cadastrar</Text>
            </Botao>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#696969ff',
    borderWidth: 0.7,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    width: '90%',
    height: 600,
  },
  fundo: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8369f5',
  }
})