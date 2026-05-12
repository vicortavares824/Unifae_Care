import CompHeader from "@/comp/CompHeader";
import CompMeio from "@/comp/CompMeio";
import CompProgress from "@/comp/CompProgress";
import Botao from "@/componente/base/button";
import { theme } from "@/styles/global";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
export default function Home() {
 const [isLoading, setIsLoading] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <CompHeader/>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <CompMeio/>
         <View style={{ justifyContent:'center',alignItems:'center',marginVertical:10}}>
                    <Botao
                      backgroundColor={theme.colors.primary}
                      width={270}
                      isLoading={isLoading}
                      loadingText="Carregando Exercicio..."
                      showLoadingIndicator
                      style={{ alignSelf: "center" }}
                    >
                     <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                       Iniciar Exercicios
                 </Text>
              </Botao>
          </View>
        <CompProgress Progress={50}/>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: theme.colors.white,
    flexDirection: "column",
    height:'100%'
  },
});