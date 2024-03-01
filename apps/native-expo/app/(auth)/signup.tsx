import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  return (
    <View className="justify-center items-center flex-1  ">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="justify-center items-center flex-1">
          <Text className="text-7xl font-semibold">SignUp</Text>
          <Link href={"/login"} className=" mt-3 " asChild>
            <Pressable
              android_ripple={{ borderless: false }}
              className="bg-black flex-row gap-3 items-center justify-center max-w-xs  py-3 px-4 w-full rounded-lg overflow-hidden"
            >
              <FontAwesome name="user-plus" size={17} color="white" />
              <Text className="text-white text-center">Create Account</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SignUpScreen;
