import React from "react";
import { View,Text, Image } from "react-native";
interface DoutouresProps {
    Categoria: string;
    nome: string;
    Nivel: string;
    image: string;
}
export default function Doutoures({ Categoria, nome, Nivel, image }: DoutouresProps) {
  return(
    <View>
        <View style={{justifyContent: "center", margin: 20, padding: 20, backgroundColor: "#eeeeeeff", borderRadius: 10}}>
        <Text style={{ fontSize: 14, fontWeight: "bold" ,paddingHorizontal: 40,marginVertical: 10,color: "#757171ff"}}>{Categoria} Responsavel</Text>
       
        
       <View style={{justifyContent: "center", flexDirection: "row", alignItems: "center"}}>
         <Image source={{ uri: image }} style={{ width: 70, height: 70, borderRadius: 20 }} />
        <View style={{justifyContent: "center", flexDirection: "column", marginLeft: 20}}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>{nome}</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#969494c9" }}>{Nivel}</Text>
        </View>
       </View>
        </View>
    </View>
  );
}