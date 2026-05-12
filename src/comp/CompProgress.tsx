
import { View ,Text} from "react-native";
import { CircularProgress } from "@/componente/organisms/circular-progress";
import { useSharedValue } from "react-native-reanimated";
import { theme } from "@/styles/global";
interface progress{
    Progress: number
}
export default function compProgress({Progress}:progress){
    const progress = useSharedValue(Progress);
    return(
         <View style={{ width:320,height:180,borderRadius:10,backgroundColor:'#f3f3f3ff',margin:10,padding:20}}>
            <Text style={{fontSize:15,fontWeight:'bold',marginVertical:10}}>Seu Progresso</Text>
            <View style={{flexDirection:'row'}}>
                <CircularProgress
                  progress={progress}
                  size={100}
                  strokeWidth={8}
                  outerCircleColor="rgba(255,255,255,0.15)"
                  progressCircleColor={theme.colors.primary}
                  backgroundColor="#0000000f"
                  renderIcon={() => (
                    <Text>{Progress}%</Text>
                  )}
                />
                <View style={{marginLeft:10}}>
                  <Text style={{fontSize:12,fontWeight:'bold'}}>Voce esta Indo Bem muito bem</Text>
                  <Text style={{color:'#acadacff',fontSize:10}}>Continue Assim</Text>
                </View>
            </View>
          </View>
    );
}