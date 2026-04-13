import StaggeredText from "@/componente/organisms/staggered-text";
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming
} from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');
import { SvgXml } from 'react-native-svg';
const TEXTS: string[] = [
  "Organize_seus_estudos",
  "Alcance_seus_objetivos",
  "Pronto_para_começar?",
];
const logoXml = `
<svg viewBox="0 0 167.63 167.77">
  <path d="M155 111c1.76 4.86 3.26 9.68-.18 14.53-2.29 3.23-4.3 6.66-6.56 9.93-1.43 2.08-2.11 2.16-4.4 1-1.6-.82-3.16-1.7-5.27-2.83.42 2.6.62 4.71 1.12 6.74.73 3 .09 5.29-2.5 7q-7.69 5.15-15.37 10.33a4.22 4.22 0 0 1-4.75 0c-2.71-1.46-5.43-2.89-8.36-4.44a7.11 7.11 0 0 0-.18 1.42c.13 1.14.31 2.27.51 3.39.73 4.2.22 5.1-3.83 6.24a87.84 87.84 0 0 1-25.33 3.35 9.51 9.51 0 0 1-4.68-1.44c-3.58-2.26-7-4.81-10.45-7.24l-2.48-1.75c.17 1.56.29 2.61.4 3.65.28 2.36-.42 2.94-2.76 2.24a81.72 81.72 0 0 1-25.23-12.39C17.22 138 6.06 120.92 1.7 99.66.52 93.91.44 87.91 0 82c-.17-2.34.85-2.84 3-1.82.82.39 1.67.7 3 1.24-1-3-1.62-5.66-2.8-8-3.12-6.2-2.48-12.2.51-18.15 2.9-5.76 5.84-11.5 8.92-17.17 1.47-2.7 2.45-2.89 5.29-1.74 1.71.69 3.39 1.44 5.52 2.34-.58-2.83-.93-5.21-1.57-7.51a6 6 0 0 1 1.86-6.67 84.77 84.77 0 0 1 16-12.22c1.06-.6 2.91-.36 4.19.09a77 77 0 0 1 7.29 3.43c-.14-1.26-.22-2.14-.35-3a15.56 15.56 0 0 1-.56-3.76 3.27 3.27 0 0 1 1.58-2.41c5.21-1.56 10.47-3 15.76-4.22a6.33 6.33 0 0 1 3.68.65c2.56 1.16 5 2.55 7.85 4-.23-1.62-.47-3-.61-4.31-.2-2.06.39-2.86 2.4-2.8 5.35.2 10.74.27 16.04.8 4.35.44 7.67 3.41 11.24 5.64.84.52 1.64 1.1 2.42 1.64.24-.25.4-.34.4-.43V4.74a13.6 13.6 0 0 1 3 .47c24.72 10 41.38 27.57 49.64 52.87 1.88 5.76 2.65 11.92 3.63 18 .64 4 .12 4.2-3.86 2.47.33 1.33.59 2.43.86 3.52a83.1 83.1 0 0 1 2.21 9.2 19.79 19.79 0 0 1-.46 6.76c-.93 4.06-2.19 8-3.34 12-.48 1.66-1.52 2.07-3.09 1.3s-2.91-1.34-4.65-2.13v1.89a33.21 33.21 0 0 0-3.55-3.18 176.37 176.37 0 0 1-47.74-46.43A183.81 183.81 0 0 1 79.1 9.8c-.24-.8-.51-1.88-1.1-2.28-2.34-1.52-4.81-2.84-7.22-4.23l-.64.58a174.61 174.61 0 0 0 30.5 67.94 170.3 170.3 0 0 0 55.66 48.08c-.15-1.49-.18-2.33-.31-3.16-.3-1.9-.64-3.8-.99-5.73zM42.79 12.39l-.6.59C48 44 60.24 72.24 80.27 96.74a172 172 0 0 0 58.89 46.52c-.1-2.46-.56-4.74-.85-7a4.31 4.31 0 0 0-2.26-3.3c-6.45-4.14-13-8.18-19.19-12.66a161.61 161.61 0 0 1-32.57-31.5c-16.18-20.61-26.61-44-32.71-69.36-.25-1-.41-2.45-1.12-2.91-2.46-1.53-5.09-2.79-7.67-4.14zM16 36.22l-.63.7c8.51 36.9 25.17 69.35 52.84 95.74a177.53 177.53 0 0 0 40.07 29.25c.87-5.16-.5-8.24-4.23-10.58-23.05-14.52-42.63-32.7-57.32-55.85A191.26 191.26 0 0 1 23.5 41.59c-.23-.88-.53-2.06-1.19-2.44A69.23 69.23 0 0 0 16 36.22zm149.75 55.36a9.46 9.46 0 0 0 0-1.86c-.77-3-1.42-6.14-2.46-9.1a8.92 8.92 0 0 0-2.69-3.52c-4.92-4.16-10.24-7.89-14.88-12.34-15.78-15.11-26.9-33.27-34.21-53.82a6.46 6.46 0 0 0-2.16-3c-2.5-1.79-5.19-3.33-7.82-4.94a7.09 7.09 0 0 0-1.64-.37c6.93 23.4 17.86 44.14 34 62a149.48 149.48 0 0 0 31.86 26.95zM1 80.32c5.85 19.93 14.8 37.77 28 53.4a138.54 138.54 0 0 0 33.11 29c0-3.11-.22-5.41-2.65-6.92a27.8 27.8 0 0 1-3.11-2.56A176.4 176.4 0 0 1 6.77 84.78C5.73 82.22 4.07 81 1 80.32z" fill="#8369f5"/>
</svg>
`;

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
          setTimeout(() => setShowLogo(true), 1000); // Mostra a logo após o último texto
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showLogo) {
      // Animação da logo (mesma lógica anterior)
      opacity.value = withTiming(1, { duration: 800, easing: Easing.out(Easing.exp) });
      scale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.back(1.5)) }, (finished) => {
        if (finished && onAnimationFinish) {
          opacity.value = withDelay(1500, withTiming(0, { duration: 500 }, (f) => {
            if (f) runOnJS(onAnimationFinish)();
          }));
        }
      });
    }
  }, [showLogo]);

  return (
    <View style={styles.container}>
      {!showLogo ? (
        <View style={styles.textContainer}>
          <StaggeredText
            texts={TEXTS}
            activeIndex={textIndex}
            fontSize={28}
            color="#8369f5"
            letterSpacing={0.5}
            staggerFrom="leading"
          />
        </View>
      ) : (
       <Animated.View style={[styles.logoContainer, logoStyle]}>
        <SvgXml xml={logoXml} width="50%" height="50%" />
      </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff', // Alterado para combinar com o estilo do StaggeredText sugerido pelo usuário
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logoContainer: {
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
