import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";
import {
  Adapt,
  Button,
  Label,
  Popover,
  RadioGroup,
  XStack,
  YStack,
} from "tamagui";

export const GroupSettingsPopover = () => {
  return (
    <Popover size="$5" allowFlip placement="bottom">
      <Popover.Trigger asChild p="$2">
        <Pressable>
          <AntDesign name="setting" color={"white"} size={25} />
        </Pressable>
      </Popover.Trigger>
      <Popover.Content
        w={250}
        borderWidth={1}
        p="$2"
        px="$4"
        top={50}
        borderColor="$borderColor"
        enterStyle={{ y: -100, opacity: 0 }}
        exitStyle={{ y: 0, opacity: 0 }}
        elevate
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
        <RadioGroup
          w={225}
          aria-labelledby="Select one item"
          defaultValue="1"
          name="form"
        >
          <RadioItemWithLabel id="1" value="1" label="All Groups" />
          <RadioItemWithLabel id="2" value="2" label="Outstanding Balances" />
          <RadioItemWithLabel id="3" value="3" label="Groups you owe" />
          <RadioItemWithLabel id="4" value="4" label="Groups you lent" />
        </RadioGroup>
      </Popover.Content>
    </Popover>
  );
};

const RadioItemWithLabel = ({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <YStack width={300} alignItems="center">
      <XStack width={300} alignItems="center" gap="$4">
        <RadioGroup.Item value={value} id={id} size={"$5"}>
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <Label size={"$5"} htmlFor={id}>
          {label}
        </Label>
      </XStack>
    </YStack>
  );
};

{
  /* <Adapt >
        <Popover.Sheet  unmountChildrenWhenHidden snapPoints={[50,30]} modal dismissOnSnapToBottom>
          <Popover.Sheet.Frame padding="$4">
            <RadioGroup
              aria-labelledby="Select one item"
              defaultValue="1"
              name="form"
            >
              <RadioItemWithLabel id="1" value="1" label="All Groups" />
              <RadioItemWithLabel
                id="2"
                value="2"
                label="Outstanding Balances"
              />
              <RadioItemWithLabel id="3" value="3" label="Groups you owe" />
              <RadioItemWithLabel id="4" value="4" label="Groups you lent" />
            </RadioGroup>
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt> */
}
