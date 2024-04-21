import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  Button,
  H3,
  H4,
  ScrollView,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";
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
          <YStack jc={"space-between"}>
            <H3>162</H3>
            <Text fontSize={"$5"} col={"$orange10Dark"} mt="$2">
              You owe ₹908.00 overall
            </Text>
            <YStack jc={"space-between"} gap="$2" mt="$3">
              <Text fontSize={"$4"}>
                You owe Gaurav <Text col={"$orange10Dark"}> ₹908.00 </Text>
              </Text>
              <Text fontSize={"$4"}>
                You owe Harsh <Text col={"$orange10Dark"}> ₹908.00 </Text>
              </Text>
              <Text fontSize={"$4"}>Plus 3 other balances</Text>
            </YStack>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              mt="$4"
            >
              <XStack gap="$2">
                <Button size={"$4"} bg="$red9Dark">
                  <Text fontSize={"$4"}>Settle up</Text>
                </Button>
                <Button size={"$4"}>
                  <Text fontSize={"$4"}>Balances</Text>
                </Button>
                <Button size={"$4"}>
                  <Text fontSize={"$4"}>Totals</Text>
                </Button>
                <Button size={"$4"}>
                  <Text fontSize={"$4"}>Export</Text>
                </Button>
              </XStack>
            </ScrollView>
          </YStack>
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
        <Ionicons name="arrow-back" size={25} color="white" />
      </Pressable>
      <Pressable>
        <Ionicons name="settings-outline" size={25} color="white" />
      </Pressable>
    </XStack>
  );
};
