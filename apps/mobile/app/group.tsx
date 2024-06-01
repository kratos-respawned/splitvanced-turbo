import { Link, Stack, router } from "expo-router";
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
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { FlatList, Pressable } from "react-native";
import ExpenseCard from "@/components/expense-card";
const Group = () => {
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      

      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable>
              <Ionicons name="settings-outline" size={25} color="white" />
            </Pressable>
          ),
          headerTintColor: "white",
        }}
      />
      <ScrollView pt={"$2"}>
        <YStack px={"$4"} jc={"space-between"}>
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
          <ScrollView showsHorizontalScrollIndicator={false} horizontal mt="$4">
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
                <Text fontSize={"$4"}>Whiteboards</Text>
              </Button>
              <Button size={"$4"}>
                <Text fontSize={"$4"}>Export</Text>
              </Button>
            </XStack>
          </ScrollView>
        </YStack>
        <YStack pb="$14" mt="$5" gap="$2">
          <Text px="$4">April 2024</Text>
          <FlatList
            scrollEnabled={false}
            data={Array(10).fill(0)}
            renderItem={() => <ExpenseCard />}
          />
        </YStack>
      </ScrollView>
      <XStack pos={"absolute"}  bottom="$4" right="$3" >
          <Link href={"/add-expense"} asChild>
          <Button  elevationAndroid={50} animation={"quick"}  backgroundColor={"$green9Dark"} pressStyle={{
            scale: 0.9,  
          }}
          >Add Expense</Button>
          </Link>
        </XStack>
    </YStack>
  );
};
export default Group;
