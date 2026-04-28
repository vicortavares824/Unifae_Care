import React from "react";
import { View,Text } from "react-native";
interface PorcentagemProps {
    Nivel: number;
}
export default function Porcentagem({ Nivel }: PorcentagemProps) {
  return(
    <View style={{ marginHorizontal:40, padding: 20, backgroundColor: "#b9e0b9ff", borderRadius: 20}}>
        <Text style={{ fontSize: 14, fontWeight: "bold" ,color: "#0c611a"}}>META SEMANAL</Text>
       
        
       <View style={{ flexDirection: "row"}}>
        <Text style={{ fontSize: 30, fontWeight: "bold",color:'#0c611a' }}>{Nivel}%</Text>
        <Text style={{ fontSize: 14, fontWeight: "bold",color:'#0c611a',marginTop:15,marginHorizontal:10 }}>Concluido</Text>
       </View>
       <View style={{borderRadius: 10,height: 12, width: '100%',overflow: 'hidden'}}>
        <View style={[{backgroundColor: '#125724',height: '100%',borderRadius: 10}, { width: `${Nivel}%` }]} />
      </View>
    
    </View>
  );
}