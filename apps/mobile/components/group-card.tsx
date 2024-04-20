import { Button, Text, View, XStack, YStack } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "tamagui/linear-gradient";
import { Pressable, TouchableHighlight } from "react-native";
import { Link } from "expo-router";
export const GroupCard = () => {
  return (
    <Link href={"/group"} asChild >
    <XStack jc={"flex-start"}  flex={1} br={"$4"} pressStyle={{
        bg: "$backgroundPress",
    }} gap="$3">
      <LinearGradient
        colors={["$green10", "$green8"]}
        ai={"center"}
        jc={"center"}
        p="$5"
        br={"$4"}
        start={[1, 0]}
        end={[0, 0]}
      >
        <Ionicons name="home-outline" size={40} color="white" />
      </LinearGradient>

      <YStack flex={1} py="$2">
        <Text fontSize={"$5"}>Manali Trip</Text>
        <Text color={"$orange9Dark"} fontSize={"$5"}>
          you owe ₹512.49
        </Text>
        <YStack mt="$2">
          <Text fontSize={"$2"}>
            You owe Javed A. <Text col={"$orange9Dark"}>₹512.49</Text>
          </Text>
        </YStack>
      </YStack>
    </XStack>
    </Link>
  );
};
