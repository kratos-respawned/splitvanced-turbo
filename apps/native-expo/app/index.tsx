import { useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { FormSchema } from "@repo/validators/src/formschema";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
const Home = () => {
  const [name, setName] = useState("");
  const handler = () => {
    const parsedData = FormSchema.safeParse({ name });
  };
  return (
    <View className=" flex-1 bg-background">
      <StatusBar style="light" />
      <Pressable className="flex-1" onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 items-center justify-center">
            <TextInput
              value={name}
              className="border-b border-purple-500 text-lg w-full  max-w-xs mb-4"
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name here..."
            />
            <Pressable
              android_ripple={{ borderless: false }}
              onPress={handler}
              className="w-[40%]  py-3 bg-purple-500 rounded-lg overflow-hidden max-w-xs"
            >
              <Text className="text-center text-lg text-foreground">
                Submit
              </Text>
            </Pressable>
            <Link href={"/login"} className=" mt-3 " asChild>
              <Pressable
                android_ripple={{ borderless: false }}
                className="bg-black flex-row gap-3 items-center justify-center max-w-xs  py-3 px-4 w-full rounded-lg overflow-hidden"
              >
                <FontAwesome name="user-plus" size={17} color="white" />
                <Text className="text-white text-lg text-center">
                  Create Account
                </Text>
              </Pressable>
            </Link>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};
export default Home;
