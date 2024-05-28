import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView } from "react-native";
import {
  XStack,
  YStack,
  H3,
  RadioGroup,
  H6,
  Label,
  CheckboxProps,
  SizeTokens,
  Checkbox,
} from "tamagui";
import { BottomSheet } from "./bottom-modal";
import { Text } from "tamagui";

export const PaidBySheet = () => {
  const [open, setOpen] = useState(false);
  return (
    <BottomSheet>
      <BottomSheet.Trigger setOpen={setOpen}>you</BottomSheet.Trigger>
      <BottomSheet.Sheet open={open} setOpen={setOpen} snapPoints={[400]}>
        <XStack flex={1}>
          <YStack flex={1}>
            <H3>Who Paid?</H3>
            <ScrollView>
              <RadioGroup
                mt="$3"
                aria-labelledby="Select one item"
                defaultValue="1"
                name="form"
              >
                <RadioItemWithLabel id="1" value="1" label="You" />
                <RadioItemWithLabel id="2" value="2" label="Harsh" />
                <RadioItemWithLabel id="3" value="3" label="Pallab" />
                <RadioItemWithLabel id="4" value="4" label="Javed" />
              </RadioGroup>
            </ScrollView>
          </YStack>
        </XStack>
      </BottomSheet.Sheet>
    </BottomSheet>
  );
};

export const RadioItemWithLabel = ({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <XStack flex={1} alignItems="center" gap="$4">
      <RadioGroup.Item value={value} id={id} size={"$4"}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <Label flex={1} fontSize={"$6"} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
};

export const PaidForSheet = () => {
  const [open, setOpen] = useState(false);
  const list = ["Avichal", "You", "Harsh", "Javed", "Pallab"];
  return (
    <BottomSheet>
      <BottomSheet.Trigger setOpen={setOpen}>you</BottomSheet.Trigger>
      <BottomSheet.Sheet open={open} setOpen={setOpen} snapPoints={[400]}>
        <XStack flex={1}>
          <YStack flex={1}>
            <H3>Paid For?</H3>
            <H6 mt="$2">Equally</H6>
            <ScrollView>
              <YStack>
                {list.map((value, index) => (
                  <CheckboxWithLabel
                    key={value + index.toString()}
                    label={value}
                    id={value + index.toString()}
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
  ...checkboxProps
}: CheckboxProps & { size: SizeTokens; label: string; id: string }) {
  return (
    <XStack flex={1} alignItems="center" gap="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          {/* <AntDesign name="check" /> */}
        </Checkbox.Indicator>
      </Checkbox>
      <Label flex={1} fontSize={"$6"} >
        {label}
      </Label>
    </XStack>
  );
}
