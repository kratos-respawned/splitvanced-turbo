import { Ionicons } from "@expo/vector-icons";
import { Slot, Stack, useRouter } from "expo-router";
import React, { FC } from "react";
import { Keyboard, Pressable, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatePresence, XStack, YStack } from "tamagui";

const Layout = () => {
  const router = useRouter();
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <YStack px={"$3"} flex={1} backgroundColor={"$background"}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAwareScrollView
            scrollsToTop
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          >
            <YStack flex={1} pt={"$3"}>
              <XStack>
                <Pressable onPress={() => router.canGoBack() && router.back()}>
                  <Ionicons name="arrow-back-sharp" size={24} color={"white"} />
                </Pressable>
              </XStack>
              <Slot />
            </YStack>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </YStack>
    </TouchableWithoutFeedback>
  );
};

export default Layout;
