import React, { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import * as SplashScreenNative from "expo-splash-screen";
import Router from "../router/Router";
import SplashScreenCustom from "@/componente/organisms/splash-screen";

SplashScreenNative.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreenNative.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const handleAnimationFinish = () => {
    setShowSplash(false);
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Router />
      {showSplash && (
        <SplashScreenCustom onAnimationFinish={handleAnimationFinish} />
      )}
    </View>
  );
}
