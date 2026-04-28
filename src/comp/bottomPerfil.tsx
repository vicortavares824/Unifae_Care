import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface BottomPerfilProps {
    icon?: string;
    title?: string;
}
export default function BottomPerfil({icon = 'notifications',title}: BottomPerfilProps) {
    return(
      <TouchableOpacity style={{backgroundColor:"#e2e1e1ff",padding: 10, borderRadius: 20, marginHorizontal: 40, marginTop: 20, flexDirection: "row",justifyContent: "space-between", alignItems: "center"}}>
         <View style={{flexDirection: "row", alignItems: "center"}}>
           <View style={{flexDirection: "row",backgroundColor: "#ffffffff", padding: 10, borderRadius: 50 ,marginHorizontal: 10}}>
           <Ionicons name={icon as any} size={20} color="#3cbe3cff"/>
         </View>
         <Text style={{fontSize:15,fontWeight:'bold',marginVertical:10}}>{title}</Text>
        </View>
          <View style={{flexDirection: "row", padding: 10, borderRadius: 50 }}>
           <Ionicons name="arrow-forward" size={20} color="#646464ff"/>
         </View>
        </TouchableOpacity>
    );
}