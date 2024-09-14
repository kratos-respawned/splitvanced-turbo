import {
  PaidBySheet,
  PaidForSheet,
} from "@/components/add-expense-bottom-sheets";
import { toast } from "@/components/toast";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { zodResolver } from "@hookform/resolvers/zod";
import { createExpenseSchema } from "@splitvanced/validators/src/expenseSchema";
import { Stack } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Keyboard, Pressable } from "react-native";
import { Button, Input, Square, Text, XStack, YStack } from "tamagui";
const ExpenseMenu = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<createExpenseSchema>({
    resolver: zodResolver(createExpenseSchema),
    defaultValues: {
      amount: 0.00,
      name: "",
      paidBy: "You",
      paidFor: [],
    }
  });
  const onSubmit = (data: createExpenseSchema) => {
    toast("Expense added")
  }
  return (
    <YStack onPress={Keyboard.dismiss} flex={1} backgroundColor={"$background"}>


      <Stack.Screen
        options={{
          headerTitle: "Add expense",
          headerRight: () => (
            <Pressable onPress={handleSubmit(onSubmit)}>
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
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                unstyled
                value={value}
                onChangeText={onChange}

                onBlur={onBlur}
                focusStyle={{
                  borderBottomColor: "$green10Dark",
                }}
                borderBottomColor={"$backgroundFocus"}
                flex={1}
                borderBottomWidth={"$1"}
                h="$4"
                w={"$18"}
                color={"white"}
                fontSize={"$5"}
                placeholder="Expense name"
              />
            )}
            name="name"
          />


        </XStack>
        <XStack gap="$3">
          <Square bg={"$backgroundFocus"} width={"$4"} borderRadius={"$2"}>
            <MaterialIcons name="currency-rupee" size={24} color="white" />
          </Square>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                unstyled
                onChangeText={onChange}
                value={value.toString()}
                onBlur={onBlur}
                inputMode="decimal"
                focusStyle={{
                  borderBottomColor: "$green10Dark",
                }}
                borderBottomColor={"$backgroundFocus"}
                flex={1}
                borderBottomWidth={"$1"}
                h="$4"
                w={"$18"}
                color={"white"}
                fontSize={"$7"}
                fontWeight={"$8"}
                placeholder="0.00"
              />
            )}
            name="amount"
          />

        </XStack>
        <XStack ai={"center"} gap="$3">
          <Text fontSize={"$5"}>Paid by</Text>
          <PaidBySheet control={control} />
          <Text fontSize={"$5"}>an split</Text>
          <PaidForSheet control={control} />
        </XStack>
        {errors.name && <Text color="red">Name :: {errors.name.message}</Text>}
        {errors.amount && <Text color="red">Amount :: {errors.amount.message}</Text>}
        {errors.paidBy && <Text color="red">Paid By :: {errors.paidBy.message}</Text>}
        {errors.paidFor && <Text color="red">Paid For :: {errors.paidFor.message}</Text>}
      </YStack>
      <Button
        position="absolute"
        bottom="$4"
        bg="$green9Dark"
        ai={"center"}
        left="$4"
      >
        {/* TODO :: create a popover to change group */}
        <FontAwesome6 name="user-group" size={17} color="white" />
        Goa Trip
      </Button>
    </YStack>
  );
};
export default ExpenseMenu;
