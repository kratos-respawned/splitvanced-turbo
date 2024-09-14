import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Control, useController } from "react-hook-form";
import {
  CheckboxProps,
  Circle,
  H3,
  ScrollView,
  SizeTokens,
  Text,
  XStack,
  YStack
} from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { Pressable } from "./Pressable";
import { BottomSheet } from "./bottom-modal";

export const PaidBySheet = ({
  control
}:{
  
  control:Control<{
    name: string;
    amount: number;
    paidBy: string;
    paidFor: string[];
}, any>
}) => {
  const [open, setOpen] = useState(false);
  const list = ["Avichal", "You", "Harsh", "Javed", "Pallab"];
  const {field}=useController({
    control,
    name:"paidBy",
  })
  const changePaidBy = (person: string) => {
    field.onChange(person)
  };
  return (
    <BottomSheet>
      
      <BottomSheet.Trigger setOpen={setOpen}>{field.value}</BottomSheet.Trigger>
      <BottomSheet.Sheet open={open} setOpen={setOpen} snapPoints={[400]}>
        <XStack flex={1}>
          <YStack flex={1}>
            <H3>Who Paid?</H3>
            <ScrollView mt="$3">
              <YStack gap="$2">
                {list.map((person, index) => {
                  return (
                    <RadioItemWithLabel
                      paidBy={field.value}
                      setPaidBy={changePaidBy}
                      id={person}
                      closeSheet={() => setOpen(false)}
                      key={person}
                      label={person}
                    />
                  );
                })}
              </YStack>
            </ScrollView>
          </YStack>
        </XStack>
      </BottomSheet.Sheet>
    </BottomSheet>
  );
};

export const RadioItemWithLabel = ({
  id,
  closeSheet,
  label,
  paidBy,
  setPaidBy,
}: {
  id: string;
  label: string;
  closeSheet: () => void;
  paidBy: string;
  setPaidBy: (name: string) => void;
}) => {
  return (
    <Pressable
      backgroundColor={id === paidBy ? "$backgroundFocus" : "$background"}
      px="$4"
      borderRadius={"$5"}
      py="$3"
      onPress={() => {
        setPaidBy(id);
        closeSheet();
      }}
    >
      <XStack flex={1} alignItems="center" gap="$4">
        <Circle overflow="hidden">
          <LinearGradient
            width="$5"
            height="$5"
            borderRadius="$4"
            colors={["$red10", "$yellow10"]}
            start={[0, 1]}
            end={[0, 0]}
          />
        </Circle>
        <Text fontSize={"$5"} flex={1}>
          {label}
        </Text>
        {/* {itemList.includes(id) && <CheckIcon />} */}
      </XStack>
    </Pressable>
  );
};

export const PaidForSheet = ({
  control
}: {
  control:Control<{
    name: string;
    amount: number;
    paidBy: string;
    paidFor: string[];
}, any>
}) => {
  const [open, setOpen] = useState(false);
  const {field} =useController({
    control,
    name:"paidFor"
  })
  // TODO :: fetch list from server
  const list = ["Avichal", "You", "Harsh", "Javed", "Pallab"];
  const pushItem = (val: string) => {
    field.value.includes(val)?
    field.onChange(field.value.filter((item)=>item!==val)):
    field.onChange([...field.value,val])
  };
  return (
    <BottomSheet>
      <BottomSheet.Trigger setOpen={setOpen}>Equally</BottomSheet.Trigger>
      <BottomSheet.Sheet open={open} setOpen={setOpen} snapPoints={[400]}>
        <XStack flex={1}>
          <YStack flex={1}>
            <H3>
              Paid For? <Text fontSize={"$5"}>(Equally)</Text>{" "}
            </H3>
            {/* debug */}
            <Text>{field.value}</Text>
            <ScrollView mt="$2">
              <YStack gap="$2">
                {list.map((value, index) => (
                  <CheckboxWithLabel
                    itemList={field.value}
                    pushItem={pushItem}
                    key={value + index.toString()}
                    label={value}
                    id={index.toString()}
                    size="$3"
                  />
                ))}
              </YStack>
            </ScrollView>
          </YStack>
        </XStack>
      </BottomSheet.Sheet>
    </BottomSheet>
  );
};

export function CheckboxWithLabel({
  size,
  label,
  id,
  itemList,
  pushItem,
  ...checkboxProps
}: CheckboxProps & {
  size: SizeTokens;
  label: string;
  id: string;
  itemList: string[];
  pushItem: (val: string) => void;
}) {
  return (
    <Pressable
      px="$4"
      py="$3"
      backgroundColor={
        itemList.includes(id) ? "$backgroundFocus" : "$background"
      }
      borderRadius={"$5"}
      onPress={() => pushItem(id)}
    >
      <XStack flex={1} alignItems="center" gap="$4">
        <Circle overflow="hidden">
          <LinearGradient
            width="$5"
            height="$5"
            borderRadius="$4"
            colors={["$red10", "$yellow10"]}
            start={[0, 1]}
            end={[0, 0]}
          />
        </Circle>
        <Text fontSize={"$5"} flex={1}>
          {label}
        </Text>
        {itemList.includes(id) && <CheckIcon />}
      </XStack>
    </Pressable>
  );
}
