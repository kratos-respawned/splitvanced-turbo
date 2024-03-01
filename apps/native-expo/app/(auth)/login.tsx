import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { useAuthRequest } from "expo-auth-session";

const SignInScreen = () => {
  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  const resp = WebBrowser.openAuthSessionAsync("https:// ) ");
  return (
    <View className="justify-center items-center flex-1  ">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="justify-center items-center flex-1">
          <Button title="Sign in with Google" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SignInScreen;
