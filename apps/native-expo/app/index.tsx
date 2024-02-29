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
const Home = () => {
  const [name, setName] = useState("");
  const handler = () => {
    const parsedData = FormSchema.safeParse({ name });
    // if (parsedData.success)
    // Alert.alert("Success", JSON.stringify(parsedData.data));
    // else Alert.alert("Error", JSON.stringify(parsedData.error.format()));
  };
  return (
    <View className="bg-slate-900 flex-1">
      <StatusBar style="light" />
      <Pressable className="flex-1" onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 items-center justify-center">
            <TextInput
              value={name}
              placeholderClassName="text-white"
              className="border-b border-purple-500 text-lg w-full text-white max-w-xs mb-4"
              onChangeText={(text) => setName(text)}
              placeholder="Enter your name here..."
            />
            <Pressable
              android_ripple={{ borderless: false }}
              onPress={handler}
              className="w-[40%]  py-3 bg-purple-500 rounded-lg overflow-hidden max-w-xs"
            >
              <Text className="text-center text-lg ">Submit</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  );
};
export default Home;
