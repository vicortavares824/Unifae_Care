import { api } from "@/api/api";
import { CircularProgress } from "@/componente/organisms/circular-progress";
import { RootStackParamList } from "@/router/Router";
import { theme } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { AxiosError } from "axios";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import AnimatedScrollProgress from "../componente/micro-interactions/animated-scroll-progress";

const TERMS = {
  title: "Termos de Uso",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et arcu eros. Etiam luctus, est eget cursus pretium, est sem faucibus leo, eget varius leo velit eget eros. Curabitur facilisis tortor justo, congue dignissim diam auctor ut. Duis commodo tellus sed ipsum malesuada finibus. Quisque eleifend viverra lacinia. Nulla aliquam finibus diam eu gravida. Ut suscipit turpis eu dolor viverra luctus. Cras venenatis velit vel nulla hendrerit lobortis. Sed vitae placerat tortor, id commodo sapien. Suspendisse condimentum vestibulum nisi, nec hendrerit nisl mattis id. Integer sit amet est ut enim rutrum dictum. Curabitur porttitor malesuada lorem, id pellentesque nibh faucibus ut. Aliquam vitae nisl ultricies, varius libero id, luctus metus. Phasellus in metus elit. Vivamus vitae nisi leo.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed non erat tortor. Nulla placerat varius nulla, blandit vestibulum orci ultrices sed. Nam imperdiet pulvinar diam, non imperdiet nisl bibendum non. Aenean sed mollis libero, non auctor quam. Mauris id iaculis est. Etiam et massa euismod, fringilla metus in, placerat urna. Proin non augue vestibulum, porta arcu consectetur, pharetra felis.

Sed luctus pulvinar leo eget finibus. Nulla suscipit mi mauris, tempus volutpat est sagittis eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vitae nisl at magna tristique mollis. Aliquam semper mi eu lacus lobortis maximus. Donec at nisl at justo faucibus ultrices ac sit amet nisl. Donec non metus vulputate, pellentesque lacus in, posuere purus. Pellentesque congue et ante sit amet ullamcorper.

Duis bibendum consequat lectus, et convallis sapien malesuada sed. Pellentesque eu hendrerit diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla pulvinar magna nec tellus aliquam dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum et finibus sapien. Fusce eget ullamcorper felis. Curabitur scelerisque velit ut elit maximus, non porttitor orci posuere. Nulla facilisi. Mauris porttitor eget magna at rutrum.
`,
};

export default function Termos() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const progress = useSharedValue<number>(0);

  const handleAccept = async () => {
    const payload = {
      consentTermId: 2,
    };

    try {
      const result = await api.post("v1/auth/consent/accept", payload);

      if (result.status === 201) {
        console.log("Consent accepted successfully", result.data);
        navigation.navigate("home");
      }
    } catch (e) {
      const error = e as AxiosError;
      console.error(`Accept error: ${error.message}`);
    }

    return;
  };

  const handleDecline = () => {
    navigation.navigate("Formulario");
    return;
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="light" />

      <AnimatedScrollProgress
        fabWidth={280}
        fabHeight={56}
        fabBottomOffset={50}
        fabBackgroundColor={theme.colors.primary}
        fabEndBackgroundColor={theme.colors.primary}
        fabBorderRadius={28}
        showFabOnScroll
        fabAppearScrollOffset={50}
        onScrollProgressChange={(_value) => {
          progress.value = _value;
        }}
        renderInitialContent={() => (
          <View style={styles.fabContent}>
            <View style={styles.fabTextContent}>
              <Text style={[styles.fabTitle]}>{TERMS.title}</Text>
            </View>
            <View
              style={{
                position: "absolute",
                left: 200,
              }}
            >
              <CircularProgress
                progress={progress}
                size={36}
                renderIcon={() => (
                  <Ionicons
                    name="checkmark-done"
                    size={15}
                    color={theme.colors.background}
                  />
                )}
                strokeWidth={3}
                backgroundColor={theme.colors.text}
              />
            </View>
          </View>
        )}
        renderEndContent={() => (
          <View
            style={{
              flex: 1,
              width: 240,
              height: 56,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
            }}
          >
            <TouchableOpacity
              onPress={handleDecline}
              style={{
                backgroundColor: "#ffdbdb",
                height: 36,
                paddingHorizontal: 20,
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: theme.colors.red,
                }}
              >
                Voltar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleAccept}
              style={{
                backgroundColor: "#e1ffdb",
                height: 36,
                paddingHorizontal: 20,
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  color: theme.colors.primary,
                }}
              >
                Aceitar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      >
        <View style={styles.content}>
          <Text style={[styles.title]}>{TERMS.title}</Text>

          <View style={styles.divider} />

          <Text style={[styles.body]}>{TERMS.content}</Text>
        </View>
      </AnimatedScrollProgress>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 140,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: theme.colors.primary,
    marginBottom: 24,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.primary,
    marginVertical: 28,
  },
  body: {
    fontSize: 17,
    color: theme.colors.text,
    lineHeight: 28,
  },
  fabContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  fabTextContent: {
    gap: 2,
  },
  fabTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.background,
  },
});
