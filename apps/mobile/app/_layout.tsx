import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider, YStack } from "tamagui";
import { PortalProvider } from "@tamagui/portal";
import config from "../tamagui.config";
import { StatusBar } from "expo-status-bar";

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
    <TamaguiProvider config={config}>
      <PortalProvider shouldAddRootHost>
        <StatusBar style="light" />
        <YStack flex={1} bg="$background">
          <Stack
            screenOptions={{
              animation: "ios",
              headerShown: true,
              headerBackground: () => <YStack flex={1} />,
              headerTitleAlign: "left",
              headerTitle: "",
              headerTintColor: "white",
            }}
          />
        </YStack>
      </PortalProvider>
    </TamaguiProvider>
  );
}
