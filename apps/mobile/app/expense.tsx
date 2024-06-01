import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack, router } from "expo-router";
import { Pressable, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Circle, Separator, Text, View, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";

const ExpenseScreen = () => {
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <XStack gap="$4">
              <Pressable>
                <MaterialIcons name="delete" size={24} color="white" />
              </Pressable>
              <Pressable>
                <MaterialIcons
                  name="mode-edit-outline"
                  size={24}
                  color="white"
                />
              </Pressable>
            </XStack>
          ),
        }}
      />
      <YStack px="$4">
        <Text fontSize={"$9"}>₹60.00</Text>
        <Text fontSize={"$3"}>Added by Pallab on Apr 30,2024</Text>
        <YStack mt="$7" ml="$8" pos={"relative"}>
          <Separator
            vertical
            pos={"absolute"}
            left="$0"
            top="$0"
            bottom="$2.5"
          />
          <XStack ai={"center"} gap="$6" pos={"relative"} pl="$8">
            <Circle
              position="absolute"
              transform={[{ translateX: -25 }]}
              size={50}
              overflow="hidden"
            >
              <LinearGradient
              width={"100%"}
              height={"100%"}
                borderRadius="$4"
                colors={["$red10", "$yellow10"]}
                start={[0, 1]}
                end={[0, 0]}
              />
            </Circle>
            <Text fontSize={"$6"}>Pallab paid ₹60.00</Text>
          </XStack>
          <YStack mt="$4" gap="$2.5">
            <XStack ai={"center"} gap="$3">
              <Separator maxWidth={"$4"} />
              <Text>You owe ₹60.00</Text>
            </XStack>
            <XStack ai={"center"} gap="$3">
              <Separator maxWidth={"$4"} />
              <Text>Pallab owes ₹60.00</Text>
            </XStack>
            <XStack ai={"center"} gap="$3">
              <Separator maxWidth={"$4"} />
              <Text>Javed owes ₹60.00</Text>
            </XStack>
            <XStack ai={"center"} gap="$3">
              <Separator maxWidth={"$4"} />
              <Text>Harsh owes ₹60.00</Text>
            </XStack>
            <XStack ai={"center"} gap="$3">
              <Separator maxWidth={"$4"} />
              <Text>Avichal owes ₹60.00</Text>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  );
};
export default ExpenseScreen;
