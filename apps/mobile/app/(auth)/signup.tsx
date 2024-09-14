import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "@splitvanced/validators/src/authSchema";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
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

import { FontAwesome6 } from "@expo/vector-icons";

import { signup } from "@/rpc/signup";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUpScreen = () => {
  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const SignUpFlow = async (data: SignUpSchema) => {
    const resp = await signup(data);
    if (resp.status === "403") {
      router.push("/(auth)/otp");
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
    <YStack px={"$3"} flex={1} backgroundColor={"$background"}>
      <KeyboardAwareScrollView
        scrollsToTop
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <YStack flex={1} backgroundColor={"$background"}>
      <H3 mt="$4">Create an account</H3>
      <Form onSubmit={handleSubmit(SignUpFlow)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack>
              <Label width={"$13"}>Username</Label>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                focusStyle={{
                  borderColor: formState.errors.email ? "red" : "$green10Dark",
                }}
                placeholder="Username"
              />
              {formState.errors.name?.message && (
                <Text color={"red"}>{formState.errors.name?.message}</Text>
              )}
            </YStack>
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <YStack>
              <Label width={"$13"}>Email</Label>
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                focusStyle={{
                  borderColor: formState.errors.email ? "red" : "$green10Dark",
                }}
                placeholder="Name"
              />
              {formState.errors.email?.message && (
                <Text color={"red"}>{formState.errors.email?.message}</Text>
              )}
            </YStack>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <YStack>
              <Label width={"$13"}>Password</Label>
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
              {formState.errors.password?.message && (
                <Text color={"red"}>{formState.errors.password?.message}</Text>
              )}
            </YStack>
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <YStack>
              <Label width={"$13"}>Confirm Password</Label>
              <Input
                ref={ref}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                focusStyle={{
                  borderColor: formState.errors.confirmPassword
                    ? "red"
                    : "$green10Dark",
                }}
                placeholder="Confirm Password"
                secureTextEntry={!showPassword}
              />
              {formState.errors.confirmPassword?.message && (
                <Text color={"red"}>
                  {formState.errors.confirmPassword?.message}
                </Text>
              )}
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
        <Button
          onPress={() => router.push("/(auth)/otp")}
          mt={"$4"}
          elevationAndroid={5}
          backgroundColor={"$green10Dark"}
        >
          Test
        </Button>
      </Form>
      <Link  href={"/(auth)/login"} asChild >
        <Text color={"white"} textAlign="center" mt={"$3"}>
          Already have an account? Sign in
        </Text>
      </Link>
    </YStack>
    </KeyboardAwareScrollView>
    </YStack>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
