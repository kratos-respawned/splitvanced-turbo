import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { Button, H2, H3, View, XStack, YStack } from "tamagui";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SignInScreen = () => {
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  const login = async () => {
    const resp = await WebBrowser.openAuthSessionAsync("https://google.com");
    console.log(resp);
  };
  const router = useRouter();
  return (
    <YStack px={"$3"} flex={1} backgroundColor={"$background"}>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1}>
          <XStack>
            <Pressable onPress={() => router.canGoBack() && router.back()}>
              <FontAwesome name="arrow-left" size={24} color={"white"} />
            </Pressable>
          </XStack>
          <H3>Welcome back</H3>
          <View flex={1} jc="center" ai={"center"} gap={"$3"}>
            <Button
              backgroundColor={"$backgroundFocus"}
              width={"$20"}
              mx="auto"
              onPress={login}
            >
              Sign in with Google
            </Button>
            <Button onPress={() => router.canGoBack() && router.back()}>
              Go Back
            </Button>
          </View>
        </YStack>
      </SafeAreaView>
    </YStack>
  );
};
export default SignInScreen;
