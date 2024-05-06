import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider, YStack } from "tamagui";

import config from "../tamagui.config";


export default function Layout() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider  config={config}>
      <YStack flex={1} bg="$background">
      <Stack screenOptions={{ headerShown: true, headerBackground:()=><YStack bg={"$background"} /> , headerTitleAlign: "left", headerTitle:"", headerTintColor: "white",  }}/>
      </YStack>
    </TamaguiProvider>
  );
}
