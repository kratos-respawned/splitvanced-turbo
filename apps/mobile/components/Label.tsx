import { Pressable } from "@/components/Pressable";
import type { IconProps } from "@tamagui/helpers-icon";
import { NamedExoticComponent } from "react";
import { Control, useController } from "react-hook-form";
import { Text } from "tamagui";
import { Categories } from "../app/add-group";

// TODO: Move to a separate file
export const Label = ({
  Icon, title, control,
}: {
  Icon: NamedExoticComponent<IconProps>;
  title: Categories;
  control: Control<
    {
      name: string;
      category: "Trip" | "Home" | "Couple" | "Other";
    }, any
  >;
}) => {
  const { field } = useController({
    control: control,
    name: "category",
  });
  return (
    <Pressable
      backgroundColor={field.value === title ? "$green10Dark" : "$background"}
      borderColor={"white"}
      borderWidth={"$0.75"}
      onPress={() => field.onChange(title)}
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
