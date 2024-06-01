import { Pressable } from "@/components/Pressable";
import { Heart, Home, List, Plane } from "@tamagui/lucide-icons";
import type { IconProps } from "@tamagui/helpers-icon";
import { Stack } from "expo-router";
import { NamedExoticComponent, useState } from "react";
import { Keyboard } from "react-native";
import { Input, ScrollView, View } from "tamagui";
import { Square, Text, XStack, YStack } from "tamagui";
const CategoryList = {
  Trip: Plane,
  Home: Home,
  Couple: Heart,
  Other: List,
};
type Categories = keyof typeof CategoryList;
const Categories: Categories[] = ["Trip", "Home", "Couple", "Other"];
const AddGroupScreen = () => {
  const [category, setCategory] = useState<Categories>("Other");
  const Icon = CategoryList[category];
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Create a group",
          headerRight: () => (
            <Pressable py="$2">
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
          <YStack>
            <Text fontSize={"$3"}>Group name</Text>
            <Input
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
        </XStack>
        <YStack>
          <Text mt="$4">Type</Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal py="$4">
            {Categories.map((item) => (
              <Label
                key={item}
                currentCategory={category}
                setCategory={() => setCategory(item)}
                Icon={CategoryList[item]}
                title={item}
              />
            ))}
          </ScrollView>
        </YStack>
      </YStack>
    </>
  );
};
export default AddGroupScreen;

const Label = ({
  Icon,
  title,
  currentCategory,
  setCategory,
}: {
  Icon: NamedExoticComponent<IconProps>;
  title: Categories;
  currentCategory: Categories;
  setCategory: () => void;
}) => {
  return (
    <Pressable
      backgroundColor={
        currentCategory === title ? "$green10Dark" : "$background"
      }
      borderColor={"white"}
      borderWidth={"$0.75"}
      onPress={setCategory}
      flexDirection="row"
      ai={"center"}
      ml="$3"
      gap="$3"
      px="$3"
      py="$2"
      borderRadius={"$6"}
    >
      <Icon size={"$1"} />
      <Text>{title}</Text>
    </Pressable>
  );
};
