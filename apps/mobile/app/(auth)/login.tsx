import { SignInSchema } from "@splitvanced/validators/src/authSchema";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Form,
  H3,
  Input,
  Label,
  Text,
  XStack,
  YStack,
} from "tamagui";
import { Link, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

const SignInScreen = () => {
  const { control, handleSubmit, formState } = useForm<SignInSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = handleSubmit((data: SignInSchema) => {
    console.log(data);
  });
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <H3 mt="$4">Welcome back</H3>
      <Form onSubmit={onSubmit}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack>
              <Label>Email</Label>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                focusStyle={{
                  borderColor: formState.errors.email ? "red" : "$green10Dark",
                }}
                placeholder="Email"
              />
              <Text color={"red"}>{formState.errors.email?.message}</Text>
            </YStack>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <YStack>
              <Label>Password</Label>
              <Input
                ref={ref}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                focusStyle={{
                  borderColor: formState.errors.password
                    ? "red"
                    : "$green10Dark",
                }}
                placeholder="Password"
                secureTextEntry={!showPassword}
              />
              <Text color={"red"}>{formState.errors.password?.message}</Text>
            </YStack>
          )}
        />
        <XStack ai="center" jc={"flex-start"} gap={"$3"}>
          <Checkbox
            value={String(showPassword)}
            focusStyle={{ borderColor: "$green10Dark" }}
            onCheckedChange={() => setShowPassword(!showPassword)}
          >
            {showPassword && <FontAwesome6 color="#3db178" name="check" />}
          </Checkbox>
          <Label onPress={() => setShowPassword(!showPassword)}>
            Show Password
          </Label>
        </XStack>
        <Form.Trigger asChild>
          <Button
            mt={"$4"}
            elevationAndroid={5}
            backgroundColor={"$green10Dark"}
          >
            Submit
          </Button>
        </Form.Trigger>
      </Form>
      <Link replace href={"/(auth)/signup"} asChild>
        <Text color={"white"} textAlign="center" mt={"$3"}>
          Don't have an account? Sign up
        </Text>
      </Link>
    </YStack>
  );
};
export default SignInScreen;
