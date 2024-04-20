import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScrollView, View, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
const Group = () => {
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "",
            header: () => <Header />,
            headerShadowVisible: true,
          }}
        />
        <ScrollView pt={"$2"} px={"$4"}>
          <XStack jc={"space-between"} ai={"center"} gap={"$3"}></XStack>
        </ScrollView>
      </SafeAreaView>
    </YStack>
  );
};
export default Group;

const Header = () => {
  const inset = useSafeAreaInsets();

  return (
    <XStack
      px="$4"
      style={{ paddingTop: inset.top + 20 }}
      jc={"space-between"}
      bg="$background"
      gap="$5"
    >
      <Pressable onPress={router.back}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </Pressable>
      <Pressable>
        <Ionicons name="settings-outline" size={30} color="white" />
      </Pressable>
    </XStack>
  );
};
