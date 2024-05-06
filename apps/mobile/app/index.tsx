import { Link, Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Button, ScrollView, Text,  XStack, YStack } from "tamagui";
import { Pressable } from "react-native";
import { GroupCard } from "@/components/group-card";
import { StatusBar } from "expo-status-bar";
import { GroupSettingsPopover } from "@/components/group-settings-popover";
const Home = () => {
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackground: () => <YStack bg="$background"  />,
          headerShadowVisible: true,
          headerRight: () => (
            <XStack
              gap="$5"
            >
              <Pressable>
                <AntDesign name="search1" size={24} color="white" />
              </Pressable>
              <Pressable>
                <AntDesign name="addusergroup" size={24} color="white" />
              </Pressable>
              <Link href={"/login"} asChild>
                <AntDesign name="login" size={24} color="white" />
              </Link>
            </XStack>
          ),
        }}
      />
      <ScrollView pt={"$4"} px={"$4"}>
        <XStack jc={"space-between"} ai={"center"} gap={"$3"}>
          <Text fontSize={"$7"}>
            Overall, you owe <Text color={"$orange9Dark"}>₹512.49</Text>
          </Text>
          <GroupSettingsPopover />
        </XStack>
        <YStack pb="$15" gap="$3" mt="$5">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <Text mt="$3" ta={"center"}>
            Hiding group that have been settled up over one month
          </Text>
          <Button borderColor={"$green10Dark"}>Show 3 settled-up groups</Button>
        </YStack>
      </ScrollView>
    </YStack>
  );
};
export default Home;
