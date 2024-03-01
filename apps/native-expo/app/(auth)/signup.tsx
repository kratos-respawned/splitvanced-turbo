import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, View } from "tamagui";

const SignUpScreen = () => {
  return (
    <View flex={1} flexDirection="column" backgroundColor={"$background"}>
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text>SignUp</Text>
          <Link href={"/login"} className=" mt-3 " asChild>
            <Button>
              <FontAwesome name="user-plus" size={17} color="white" />
              <Text className="text-white text-center">Create Account</Text>
            </Button>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default SignUpScreen;
