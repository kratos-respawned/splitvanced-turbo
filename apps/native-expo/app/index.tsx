import { useState } from "react";
import { SignInSchema } from "@repo/validators/src/authSchema";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Button, View, YStack } from "tamagui";
const Home = () => {
  const [name, setName] = useState("");
  const handler = () => {
    const parsedData = SignInSchema.safeParse({ name });
  };
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <SafeAreaView style={{ flex: 1 }}>
        <YStack flex={1} jc="center" ai={"center"} gap={"$3"}>
          <Link href={"/login"} asChild>
            <Button width={"$20"} mx="auto">
              Sign in with Google
            </Button>
          </Link>
          <Button>Sign Up</Button>
        </YStack>
      </SafeAreaView>
    </YStack>
  );
};
export default Home;
