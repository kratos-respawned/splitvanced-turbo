import { useTimer } from "@/hooks/useTimer";
import { zodResolver } from "@hookform/resolvers/zod";
import { OPTSchema } from "@splitvanced/validators/src/authSchema";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {  Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { OtpInput } from "react-native-otp-entry";
import { Button, H3, YStack, SizableText, Form, Input, Text } from "tamagui";

const OTPScreen = () => {
  const [value, setValue] = useState("");
  const { control, handleSubmit, formState } = useForm<OPTSchema>({
    resolver: zodResolver(OPTSchema),
  });
  const [timer,reset,isPending]=useTimer(10);
  const onSubmit = (data: OPTSchema) => {
    reset();
  };
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
    
    <YStack px={"$3"} flex={1} backgroundColor={"$background"}>
    
      <KeyboardAwareScrollView
        scrollsToTop
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
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
          disabled={isPending}
            onPress={()=>reset()}
        >
          {
            isPending ? <Text color={"$gray10"}>Resend Code in {timer}</Text> : "Resend Code"
          }
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
    </KeyboardAwareScrollView>
    </YStack>
    </TouchableWithoutFeedback>
  );
};
export default OTPScreen;
