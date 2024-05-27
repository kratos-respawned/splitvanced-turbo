import { PaidBySheet, PaidForSheet } from "@/components/add-expense-bottom-sheets";
import { BottomSheet } from "@/components/bottom-modal";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {  Keyboard, Pressable } from "react-native";
import { YStack, XStack, Square, Input, Text,Button } from "tamagui";


const ExpenseMenu = () => {
  const [text, setText] = useState("");
  return (
    <YStack onPress={Keyboard.dismiss} flex={1} backgroundColor={"$background"}>
      <StatusBar style="light" />

      <Stack.Screen
        options={{
          headerTitle: "Add expense",
          headerRight: () => (
            <Pressable onPress={() => console.log(text)}>
              <Ionicons name="checkmark" size={25} color="white" />
            </Pressable>
          ),
        }}
      />
      <YStack px="$5" gap="$4">
        <XStack mt="$6" gap="$3">
          <Square bg={"$backgroundFocus"} width={"$4"} borderRadius={"$2"}>
            <Ionicons name="receipt-outline" size={24} color="white" />
          </Square>
          <Input
            unstyled
            borderBottomColor={"$backgroundFocus"}
            flex={1}
            borderBottomWidth={"$1"}
            h="$4"
            w={"$18"}
            color={"white"}
            fontSize={"$5"}
            onChangeText={(e) => setText(e)}
            placeholder="Expense name"
          />
        </XStack>
        <XStack gap="$3">
          <Square bg={"$backgroundFocus"} width={"$4"} borderRadius={"$2"}>
            <MaterialIcons name="currency-rupee" size={24} color="white" />
          </Square>
          <Input
            unstyled
            borderBottomColor={"$backgroundFocus"}
            flex={1}
            borderBottomWidth={"$1"}
            h="$4"
            w={"$18"}
            color={"white"}
            fontSize={"$7"}
            fontWeight={"$8"}
            onChangeText={(e) => setText(e)}
            placeholder="0.00"
          />
        </XStack>
        <XStack ai={"center"} gap="$3">
          <Text fontSize={"$5"}>Paid by</Text>
          <PaidBySheet />
          <Text fontSize={"$5"}>an split</Text>
          <PaidForSheet/>
        </XStack>
      </YStack>
      <Button position="absolute" bottom="$4" ai={"center"} left="$4">
        <FontAwesome6 name="user-group" size={17} color="white" />
        Goa Trip
      </Button>
    </YStack>
  );
};
export default ExpenseMenu;

