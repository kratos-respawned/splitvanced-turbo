import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  H2,
  H3,
  Input,
  Label,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
import { useRouter } from "expo-router";
import { Keyboard, Pressable } from "react-native";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
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
  const [showPassword, setShowPassword] = useState(false);
  return (
    <YStack px={"$3"} flex={1} backgroundColor={"$background"}>
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <YStack flex={1}>
            <XStack>
              <Pressable onPress={() => router.canGoBack() && router.back()}>
                <Ionicons name="arrow-back-sharp" size={24} color={"white"} />
              </Pressable>
            </XStack>
            <H3 mt="$4">Welcome back</H3>
            <Form
              onSubmit={() => {
                console.log("hello");
              }}
            >
              <YStack>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  focusStyle={{ borderColor: "$green10Dark" }}
                  placeholder="Email"
                />
              </YStack>
              <YStack>
                <Label>Password</Label>
                <Input
                  focusStyle={{ borderColor: "$green10Dark" }}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                />
              </YStack>
              <XStack ai="center" jc={"flex-start"} gap={"$3"}>
                <Checkbox
                  focusStyle={{ borderColor: "$green10Dark" }}
                  id="checkbox-showpass"
                  onCheckedChange={(checked) =>
                    setShowPassword(Boolean(checked))
                  }
                >
                  <Checkbox.Indicator>
                    <FontAwesome6 color="#3db178" name="check" />
                  </Checkbox.Indicator>
                </Checkbox>
                <Label htmlFor="checkbox-showpass">Show Password</Label>
              </XStack>
              <Form.Trigger asChild>
                <Button
                  mt={"$4"}
                  elevationAndroid={5}
                  backgroundColor={"$green10Dark"}
                >
                  Submit
                </Button>
              </Form.Trigger>
            </Form>
          </YStack>
        </SafeAreaView>
      </Pressable>
    </YStack>
  );
};
export default SignInScreen;
