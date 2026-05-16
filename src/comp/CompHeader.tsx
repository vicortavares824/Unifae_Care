import { View,Image} from "react-native";

import { FadeText } from "../componente/organisms/fade-text";
 const INPUTS: string[] = [
    "recuperação tem validade de 15 minutos.",
  ];
  const INPUTS1: string[] = [
    "Olá, Ana! "
  ];
export default function CompHeader() {
  return (

          <View style={{flexDirection:'row', marginHorizontal:10}} >
            <View style={{flexDirection:'column',alignItems:'flex-start', justifyContent:'center', flex:1}}>
                <FadeText
              inputs={INPUTS1}
              duration={3500}
              wordDelay={300}
              blurTint="extraLight"
              style={{
                fontFamily: "SfProRounded",
                fontSize: 20,
                color: "#000000ff",
                fontWeight: "bold",
              }}
            />
            <FadeText
              inputs={INPUTS}
              duration={3500}
              wordDelay={300}
              blurTint="extraLight"
              style={{
                fontFamily: "SfProRounded",
                fontSize: 16,
                color: "#000000ff",
                fontWeight: "normal",
              }}
            />
            </View>
           <Image source={{uri: 'https://imgs.search.brave.com/cnOwIoQjKS5MryTI0hVK96EQruysWqUvOP3lUhr9TYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFjc3VyLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNS9maXNpb3Rl/cmFwaWEtZmFjc3Vy/LTEwMjR4NzU5Lmpw/Zw'}} width={180} height={200}/>

          </View>
  );
}