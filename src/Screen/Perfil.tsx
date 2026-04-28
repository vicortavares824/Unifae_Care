import React from "react";
import { View, Text ,TouchableOpacity,ScrollView} from "react-native";
import { Avatar } from "@/componente/base/avatar";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import Doutoures from "@/comp/Doutoures";
import Porcentagem from "@/comp/Porcemtagem";
import BottomPerfil from "@/comp/bottomPerfil";
export default function Perfil() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: "center", flexDirection: "row", alignItems: "center", marginTop: 50}}>
            <Text style={{ fontSize: 20, fontWeight: "bold" ,paddingRight: 120}}>UNIFAE Care</Text>
            <Avatar
            image={{
                uri: "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1200",
                name: "Colocar nome do usuário aqui",
            }
            }
            size={50}
            //aqui voce pode fazer loading da imagem, e passar o valor para a prop loading, para mostrar um indicador de carregamento enquanto a imagem é carregada
            loading={false}
            borderColor={theme.colors.borderPerfil}
            textColor={theme.colors.textPerfil}
            backgroundColor={theme.colors.primary}
            />
        </View>
        <View style={{justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: 40}}>
            <View style={{justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
                <Avatar
            image={{
                uri: "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1200",
                name: "Colocar nome do usuário aqui",
            }
            }
            size={150}
            //aqui voce pode fazer loading da imagem, e passar o valor para a prop loading, para mostrar um indicador de carregamento enquanto a imagem é carregada
            loading={false}
            textColor={theme.colors.textPerfil}
            backgroundColor={theme.colors.primary}
            />
            <TouchableOpacity style={{position: "absolute", right: 0, bottom: 0, backgroundColor: theme.colors.primary, borderRadius: 20, padding: 10}}>
                <Ionicons name="pencil" size={20} color="#fbfffbff"/>
            </TouchableOpacity>
        </View>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>Cristiane Imamura</Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 10,color: "#0cce19ff" }}>ID : 123456</Text>
        </View>
        <Doutoures Categoria="FISIOTERAPEUTA" nome="Nome do Doutor" Nivel="Nível 1" image="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        <Porcentagem Nivel={60}/>
        <BottomPerfil icon='notifications' title='Lembrete'/>
        <BottomPerfil  icon='notifications-outline' title='Notificações'/>
        <BottomPerfil  icon='shield-half-outline' title='Privacidade e Dados'/>
        <TouchableOpacity style={{backgroundColor:"#ba1a1a6b",padding: 4, borderRadius: 20, marginHorizontal: 40, marginTop: 20, marginBottom: 120, flexDirection: "row",justifyContent: "center", alignItems: "center"}}>        
                 <Text style={{fontSize:15,fontWeight:'bold',marginVertical:10,color:"#ba1a1a"}}>Sair</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}