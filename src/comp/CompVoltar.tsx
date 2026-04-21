import { Text, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RadiantButton from "@/componente/base/radiant-button";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../router/Router";
import Ionicons from "@expo/vector-icons/Ionicons";
interface CompVoltarProps {
  tile?: string;
}
export default function CompVoltar({tile}: CompVoltarProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <GestureHandlerRootView style={styles.container}>

      <RadiantButton style={styles.button} textStyle={styles.radiantButtonText} onPress={navigation.goBack}  >
        <View style={styles.row}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="white" />
          <Text
            style={[
              styles.text,
              {
                fontFamily:  "HelveticaNowDisplay"
              },
            ]}
          >
           {tile ? tile : "Voltar"}
          </Text>
        </View>
      </RadiantButton>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    bottom: 190,
    left: 10,
  },

  button: {
    width: 120,

  },
    radiantButtonText: {
        fontSize: 0,
    },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },

  text: {
    fontSize: 10,
    color: "#fff",
    letterSpacing: 0.5,
  },
});
