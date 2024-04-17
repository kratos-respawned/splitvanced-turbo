import { zodResolver } from "@hookform/resolvers/zod";
import { OPTSchema } from "@splitvanced/validators/src/authSchema";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, TextInput } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Button, H3, YStack, SizableText, Form, Input, Text } from "tamagui";

const OTPScreen = () => {
  const [value, setValue] = useState("");
  const { control, handleSubmit, formState } = useForm<OPTSchema>({
    resolver: zodResolver(OPTSchema),
  });
  const onSubmit = (data: OPTSchema) => {
    console.log(data);
    // if (value.length === 4) {
    //   console.log("Submit");
    // } else {
    //   Alert.alert("Invalid OTP", "Please enter a valid OTP");
    // }
  };
  return (
    <YStack flex={1} backgroundColor={"$background"}>
      <H3 mt="$4">Verify your account</H3>
      <YStack pt="$5">
        <SizableText mb="$5">
          Enter the 4-digit code sent to your email address to verify your
          account.
        </SizableText>

        <Controller
          name="otp"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <>
              <Input
                onBlur={onBlur}
                display="none"
                value={value}
                onChange={onChange}
                placeholder="OTP"
              />
              <OtpInput
                autoFocus
                onTextChange={onChange}
                numberOfDigits={4}
                theme={{
                  pinCodeContainerStyle: {
                    width: "23%",
                    aspectRatio: 1 / 1,
                    borderWidth: 2,
                    borderColor: formState.errors.otp ? "red" : "#b0b0b0",
                  },
                  focusedPinCodeContainerStyle: {
                    borderColor: "#3db178",
                    borderWidth: 3.2,
                  },
                  pinCodeTextStyle: {
                    color: "#fff",
                  },
                }}
              />
              {formState.errors.otp?.message && (
                <Text color={"red"}>{formState.errors.otp?.message}</Text>
              )}
            </>
          )}
        />

        <Button
          variant="outlined"
          mx={"auto"}
          mt={"$2"}
          //   onPress={onSubmit}
        >
          Resend Code
        </Button>

        <Button
          onPress={handleSubmit(onSubmit)}
          mt={"$2"}
          backgroundColor={"$green10Dark"}
        >
          Submit
        </Button>
      </YStack>
    </YStack>
  );
};
export default OTPScreen;
