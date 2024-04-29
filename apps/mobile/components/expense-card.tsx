import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, XStack, YStack } from "tamagui";

const ExpenseCard = () => {
  return (
    <Link href={"/expense"} asChild>
      <XStack ai={"center"} py="$2" br={"$4"} px="$4"  gap="$3" mt="$2" pressStyle={{
        bg: "$backgroundPress",
    }}>
        <YStack ai={"center"}>
          <Text fontSize={"$4"}>Apr</Text>
          <Text fontSize={"$5"}>27</Text>
        </YStack>
        <YStack bg={"$green10Dark"} p="$2.5" br={"$3"}>
          <FontAwesome6 name="money-bill-trend-up" size={25} color="white" />
        </YStack>
        <XStack jc={"space-between"} flex={1}>
          <YStack>
            <Text fontSize={"$3"}>Auto</Text>
            <Text fontSize={"$2"}>You Paid ₹60.00</Text>
          </YStack>
          <YStack ai={"flex-end"}>
            <Text col={"$green10Dark"} fontSize={"$4"}>
              You lent
            </Text>
            <Text col={"$green10Dark"} fontSize={"$3"}>
              ₹60.00
            </Text>
          </YStack>
        </XStack>
      </XStack>
    </Link>
  );
};
export default ExpenseCard;
