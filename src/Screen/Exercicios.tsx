import React from "react";
import CompVoltar from "../comp/CompVoltar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/router/Router";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";


type FeedbackRouteProp = RouteProp<RootStackParamList, "Exercicios">;
interface ExerciciosProps {
  route: FeedbackRouteProp;
}
export default function Exercicios({ route }: ExerciciosProps) {

   const { prescriptionItemId } = route.params;
   
  const handleDetalheExe = async () => {
    const url = `v1/app/home/plan/exercises/${prescriptionItemId}`;
  };
  const handleConfirmer = async () => {
    const url = `v1/app/home/plan/exercises/${prescriptionItemId}/complete`;
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
              showsVerticalScrollIndicator={false}>
        <CompVoltar tile="UNIFAE Care"  />
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
              <Ionicons name="close" size={26} color={theme.colors.text} />
            <View>
              <Text  style={styles.titulo} >Séries</Text>
             <Text >3</Text>
              <Text >Unidades</Text>
            </View>
          </View>
             <View style={{flexDirection:"row", gap: 20,width: "50%", justifyContent: "center", alignItems: "center",backgroundColor: '#fff', paddingVertical: 10, borderRadius:10}}>
              <Ionicons name="close" size={26} color={theme.colors.text} />
            <View>
              <Text style={styles.titulo} >Volume</Text>
             <Text >15</Text>
              <Text >Repetição</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.PasTitle}>Passo Passo</Text>
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