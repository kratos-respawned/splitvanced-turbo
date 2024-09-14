import { Pressable } from "@/components/Pressable";
import { toast } from "@/components/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { newGroupSchema } from "@splitvanced/validators/src/groupSchema";
import { Heart, Home, List, Plane } from "@tamagui/lucide-icons";
import { Stack } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Keyboard } from "react-native";
import { Input, ScrollView, Square, Text, XStack, YStack } from "tamagui";
import { Label } from "../components/Label";
const CategoryList = {
  Trip: Plane,
  Home: Home,
  Couple: Heart,
  Other: List,
};
export type Categories = keyof typeof CategoryList;
export const Categories: Categories[] = ["Home", "Trip", "Couple", "Other"];
const AddGroupScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<newGroupSchema>({
    resolver: zodResolver(newGroupSchema),
    defaultValues: {
      name: "",
      category: "Home",
    },
  });
  const onSubmit = (data: newGroupSchema) => {
    toast(JSON.stringify(data));
  };
  const Icon = CategoryList[getValues("category")];
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Create a group",
          headerRight: () => (
            <Pressable py="$2" onPress={handleSubmit(onSubmit)}>
              <Text color={"$green10Dark"}>Done</Text>
            </Pressable>
          ),
        }}
      />
      <YStack
        onPress={Keyboard.dismiss}
        px="$4"
        bg="$background"
        flex={1}
        pt="$3"
      >
        <XStack gap="$3">
          <Square
            borderColor={"$gray6"}
            borderWidth="$0.5"
            w="$6"
            h="$6"
            borderRadius={"$4"}
          >
            {<Icon />}
          </Square>

          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <YStack>
                <Text fontSize={"$3"}>Group name</Text>
                <Input
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  unstyled
                  focusStyle={{
                    borderBottomColor: "$green10Dark",
                  }}
                  borderBottomColor={"$backgroundFocus"}
                  flex={1}
                  borderBottomWidth={"$1"}
                  h="$3"
                  w={"$18"}
                  color={"white"}
                  fontSize={"$4"}
                />
              </YStack>
            )}
          />
        </XStack>

        {errors.name && <Text color={"$red10"}>{errors.name.message}</Text>}
        <YStack>
          <Text mt="$4">Type</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal py="$4">
            {Categories.map((item) => (
              <Label
                key={item}
                control={control}
                Icon={CategoryList[item]}
                title={item}
              />
            ))}
          </ScrollView>
          {errors.category && (
            <Text color={"$red10"}>{errors.category.message}</Text>
          )}
        </YStack>
      </YStack>
    </>
  );
};
export default AddGroupScreen;


