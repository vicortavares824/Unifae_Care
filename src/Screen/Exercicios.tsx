import React from "react";
import CompVoltar from "../comp/CompVoltar";
import { StyleSheet, Text, View,ScrollView,Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/router/Router";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import Botao from "@/componente/base/button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
type FeedbackRouteProp = RouteProp<RootStackParamList, "Exercicios">;
interface ExerciciosProps {
  route: FeedbackRouteProp;
}
export default function Exercicios({ route }: ExerciciosProps) {
 const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
   const { prescriptionItemId } = route.params;
   
  const handleDetalheExe = async () => {
    const url = `v1/app/home/plan/exercises/${prescriptionItemId}`;
    try {
      navigation.navigate("Feedback", { prescriptionItemId });
    } catch (e) {
      console.error(`Login error: ${e instanceof Error ? e.message : e}`);
    }
  };
  const handleConfirmer = async () => {
    const url = `v1/app/home/plan/exercises/${prescriptionItemId}/complete`;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
              showsVerticalScrollIndicator={false}>
      <View style={{marginLeft: -10,marginTop:10}}>
        <CompVoltar tile="UNIFAE Care" />
          <Image  source={require("../../assets/images/Fae_Logo.jpg")} style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 50,
              position: "absolute",
              right: 10,
              top: 20,
            }} />
      </View>
        <View style={styles.center}>
          <Text style={styles.botaoMembros}>MEMBROS SUPERIORES</Text>
          <Text style={styles.botaoMembros}>MOBILIDADE</Text>
        </View>
        <View style={styles.center1}>
          <Text style={styles.tilte}>Rotação Extrerna de Ombro</Text>
            <View style={styles.banner}>
                  <Text style={styles.bannerBrand}>UNIFAE Care</Text>
                  
            </View>
        </View>
        <View style={styles.cards}>
          <View style={{flexDirection:"row", gap: 20,width: "50%", justifyContent: "center", alignItems: "center",backgroundColor: '#fff', paddingVertical: 10, borderRadius:10}}>
             <View style={{width: 50, height: 50, backgroundColor: theme.colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center",}}>
               <Ionicons name="close" size={26} color={theme.colors.white} />
             </View>
            <View>
              <Text  style={styles.titulo} >Séries</Text>
             <Text >3</Text>
              <Text >Unidades</Text>
            </View>
          </View>
             <View style={{flexDirection:"row", gap: 20,width: "50%", justifyContent: "center", alignItems: "center",backgroundColor: '#fff', paddingVertical: 10, borderRadius:10}}>
             <View style={{width: 50, height: 50, backgroundColor: theme.colors.primary, borderRadius: 10, justifyContent: "center", alignItems: "center",}}>
               <Ionicons name="checkmark" size={26} color={theme.colors.white} />
             </View>
            <View>
              <Text style={styles.titulo} >Volume</Text>
             <Text >15</Text>
              <Text >Repetição</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.PasTitle}>Passo Passo</Text>
         <View style={{flexDirection: "row", gap: 10, marginTop: 20}}>
              <View style={{justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: theme.colors.primary, borderRadius: 50}}>
                <Text style={{color: theme.colors.white, fontWeight: "bold"}}>1</Text>
              </View>
              <View style={{width: "85%"}}>
                <Text style={{fontWeight: "bold"}}>Posicionamento</Text>
                <Text>Fique de pé, com os pés afastados na largura dos ombros. Segure um halter em cada mão, com as palmas das mãos voltadas para o corpo.</Text>
              </View>
          </View>
          <View style={{flexDirection: "row", gap: 10, marginTop: 20}}>
              <View style={{justifyContent: "center", alignItems: "center", width: 50, height: 50, backgroundColor: theme.colors.primary, borderRadius: 50}}>
                <Text style={{color: theme.colors.white, fontWeight: "bold"}}>2</Text>
              </View>
              <View style={{width: "85%"}}>
                <Text style={{fontWeight: "bold"}}>Execução</Text>
                <Text>Fique de pé, com os pés afastados na largura dos ombros. Segure um halter em cada mão, com as palmas das mãos voltadas para o corpo.</Text>
              </View>
          </View>
          <View style={{flexDirection: "row", gap: 10, marginTop: 20}}>
              <View style={{justifyContent: "center", alignItems: "center", width: 50, height: 50,borderWidth: 2, borderColor: theme.colors.primary, borderRadius: 50}}>
                <Text style={{color: theme.colors.text, fontWeight: "bold"}}>3</Text>
              </View>
              <View style={{width: "85%"}}>
                <Text style={{fontWeight: "bold"}}>Posicionamento</Text>
                <Text>Fique de pé, com os pés afastados na largura dos ombros. Segure um halter em cada mão, com as palmas das mãos voltadas para o corpo.</Text>
              </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.PasTitle}>Dica de Ouro</Text>
        </View>
        <View style={{flexDirection: "row", gap: 10, marginTop: 20}}>
            <Image  source={require("../../assets/images/Fae_Logo.jpg")} style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              borderRadius: 50,
            }} />
            <View style={{width: "85%"}}>
                <Text style={{fontWeight: "bold", fontSize: 22, marginBottom: 5}}>Posicione os pés afastados</Text>
                <Text>Fique de pé, com os pés afastados na largura dos ombros. Segure um halter em cada mão, com as palmas das mãos voltadas para o corpo.</Text>
              </View>
        </View>
        <View style={{justifyContent: "center", alignItems: "center", paddingBottom: 100}}>
         <Botao
                     backgroundColor={theme.colors.primary}
                     width={320}
                     isLoading={false}
                     onPress={handleDetalheExe}
                     loadingText="finalizando..."
                     showLoadingIndicator
                     style={{ alignSelf: "center", borderRadius: 10, marginTop: 40}}
                   >
                     <Text style={{ color: theme.colors.white, fontWeight: "bold" }}>
                       Concluir Atividade
                     </Text>
                   </Botao>
        </View>
        </ScrollView>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    marginHorizontal: 20,
  },
  PasTitle:{
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cards:{
     justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
   banner: {
    marginTop: 24,
    borderRadius: 16,
    paddingVertical: 28,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.text,
    alignItems: "center",
    width:"100%",
    height: 150,
  },
  bannerBrand: {
    fontSize: 22,
    fontWeight: "800",
    color: theme.colors.white,
  },
  compVoltar:{
    marginTop: 20,
    marginBottom: 20,
  },
  center:{
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  center1:{
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  botaoMembros:{
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  tilte:{
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  titulo:{
    fontSize: 16,
    color: "#8f8f8fff",
  }

});