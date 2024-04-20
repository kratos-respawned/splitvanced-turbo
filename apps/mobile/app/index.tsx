import { useState } from "react";
import { SignInSchema } from "@splitvanced/validators/src/authSchema";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Button, ScrollView, Text, XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import { GroupCard } from "@/components/group-card";
import { StatusBar } from "expo-status-bar";
const Home = () => {
  // const [name, setName] = useState("");
  
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
          <XStack jc={"space-between"} ai={"center"} gap={"$3"}>
            <Text fontSize={"$7"}>
              Overall, you owe <Text color={"$orange9Dark"}>₹512.49</Text>
            </Text>
            <Pressable>
              <AntDesign name="setting" size={24} color="white" />
            </Pressable>
          </XStack>
          <YStack pb="$15" gap="$3" mt="$5">
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <GroupCard/>
            <Text mt="$3" ta={"center"}>Hiding group that have been settled up over one month</Text>
            <Button borderColor={"$green10Dark"}  >
              Show 3 settled-up groups
            </Button>
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </YStack>
  );
};
export default Home;
const Header = () => {
  const inset = useSafeAreaInsets();
  return (
    <XStack
      px="$4"
      style={{ paddingTop: inset.top + 20 }}
      jc={"flex-end"}
      bg="$background"
      gap="$5"
    >
      <Pressable>
        <AntDesign name="search1" size={24} color="white" />
      </Pressable>
      <Pressable>
        <AntDesign name="addusergroup" size={24} color="white" />
      </Pressable>
      <Link href={"/(auth)/login"} asChild>
        <AntDesign name="login" size={24} color="white" />
      </Link>
    </XStack>
  );
};
