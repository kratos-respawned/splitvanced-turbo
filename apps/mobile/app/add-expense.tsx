import { Ionicons } from "@expo/vector-icons"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Pressable } from "react-native"
import { Input, Square, XStack, YStack } from "tamagui"

const ExpenseMenu=()=>{
    return (
        <YStack flex={1} backgroundColor={"$background"}>
      <StatusBar style="light" />

      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Add expense",
          headerBackground: () => <XStack bg="$background" />,
          headerRight: () => (
            <Pressable>
              <Ionicons name="checkmark" size={25} color="white" />
            </Pressable>
          ),
          headerTintColor: "white",
        }}
      />
      <YStack ai={"center"} gap="$4">
        <XStack gap="$3" mt="$6">
            <Square bg={"$backgroundFocus"} px="$2.5" borderRadius={"$2"}>
            <Ionicons name="receipt-outline" size={24} color="white" />
            </Square>
            <Input w={"$18"}  placeholder="Expense name" />
        </XStack>
        <XStack gap="$3" >
            <Square bg={"$backgroundFocus"} px="$2.5" borderRadius={"$2"}>
            <Ionicons name="receipt-outline" size={24} color="white" />
            </Square>
            <Input w={"$18"}  placeholder="Expense name" />
        </XStack>
      </YStack>
        </YStack>
    )
}
export default ExpenseMenu