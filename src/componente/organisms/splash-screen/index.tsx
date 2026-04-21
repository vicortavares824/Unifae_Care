import StaggeredText from "@/componente/organisms/staggered-text";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { theme } from "@/styles/global";
const TEXTS: string[] = [
  "Recupere_sua_mobilidade",
  "Melhore_sua_saúde",
  "Pronto_para_começar?",
];

interface SplashScreenProps {
  onAnimationFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinish }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  const scale = useSharedValue(0.3);
  const opacity = useSharedValue(0);

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    // Controla a troca de textos
    const interval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < TEXTS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowLogo(true), 1000);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showLogo) {
      opacity.value = withTiming(1, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
      scale.value = withTiming(
        1,
        { duration: 2000, easing: Easing.out(Easing.back(1.5)) },
        (finished) => {
          if (finished && onAnimationFinish) {
            runOnJS(onAnimationFinish)();
          }
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showLogo]);

  return (
    <View style={styles.container}>
      {!showLogo ? (
        <View style={styles.textContainer}>
          <StaggeredText
            texts={TEXTS}
            activeIndex={textIndex}
            fontSize={28}
            color={theme.colors.primary}
            letterSpacing={0.5}
            staggerFrom="leading"
          />
        </View>
      ) : (
        <Animated.View style={[styles.logoContainer, logoStyle]}>
          <Image
            source={require("../../../../assets/images/Fae_Logo.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  logoContainer: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
