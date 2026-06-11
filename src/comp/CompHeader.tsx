import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

import { FadeText } from "../componente/organisms/fade-text";
const INPUTS: string[] = [
  "Seu cuidado diário faz toda a diferença na recuperação!",
];
const INPUTS1: string[] = ["Olá, Ana! "];

interface CompHeaderProps {
  title: string;
  description: string;
}

export default function CompHeader({ title, description }: CompHeaderProps) {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <FadeText
          inputs={[title]}
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
          inputs={[description]}
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
      <View style={{ width: 180, height: 200, overflow: "hidden" }}>
        <Image
          source={{
            uri: "https://imgs.search.brave.com/BxcczKfquxZ0Zat9xVAjvI1nia7DxqnCqtF6FFyfR64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/NTUwLzE2MC9zbWFs/bC9zaWduYXR1cmUt/cmVuYWlzc2FuY2Ut/ZG9jdG9yLWV4YW1p/bmluZy1hbi14LXJh/eS13aXRoLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtZ2VudWlu/ZS1mcmVlLXBuZy5w/bmc",
          }}
          width={180}
          height={200}
          resizeMode="cover"
        />
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.6)", "#ffffff"]}
          locations={[0.45, 0.78, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "55%",
          }}
        />
      </View>
    </View>
  );
}
