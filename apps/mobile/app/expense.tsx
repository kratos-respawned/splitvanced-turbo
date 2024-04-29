import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, XStack, YStack } from "tamagui";

const ExpenseScreen = () => {
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitle: "Auto",
            headerTitleAlign:"left",
            headerBackground: () => <XStack bg="$background" />,
            headerTintColor: "white",
            headerShadowVisible: true,
            headerRight:()=><XStack gap="$4">
            <Pressable>
              <MaterialIcons name="delete" size={24} color="white" />
            </Pressable>
            <Pressable>
              <MaterialIcons name="mode-edit-outline" size={24} color="white" />
            </Pressable>
          </XStack>
          }}
        />
      </SafeAreaView>
    </YStack>
  );
};
export default ExpenseScreen;


