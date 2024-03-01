import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerTransparent: true, headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          // headerTitleStyle: { color: "white" },
        }}
      />
      <Stack.Screen
        name="(auth)/signup"
        options={{ title: "Create Account" }}
      />
      <Stack.Screen name="(auth)/login" options={{ title: "Sign In" }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
