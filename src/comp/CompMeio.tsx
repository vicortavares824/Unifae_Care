
import { View ,Text,Image} from "react-native";

export default function compMeio(){
    return(
        <View style={{width:320,backgroundColor:'#eeeeeeff',height:180,borderRadius:10,margin:5,padding:5}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <Text>Seu Plano de Hoje</Text> 
            <Text style={{color:'green'}}>1 Exercício</Text>
          </View>
          <View style={{width:290,backgroundColor:'#d6d6d6ff',height:100,borderRadius:10,margin:10,flexDirection:'row',alignItems:'center'}} >
              <View style={{margin:20}}>
                <Text style={{color:'#000000ff',fontSize:15,fontWeight:'bold'}}>Mobilidade de Ombro</Text>
                <Text style={{color:'#9c9c9cff',fontSize:10,marginBottom:30}}>Pós-cirúrgico - Cancer de mama</Text>
              </View>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAPgIF3c7gZrRT6leuTucj1glDgigIdPliKQ&s'}} width={80} height={80}/>
          </View>
        </View>
    );
}