// import { Pressable as Button } from "react-native";
import { styled,View } from "@tamagui/core";

export const Pressable=styled(View,{
    backgroundColor:"$background",
    pressStyle:{
        backgroundColor:"$backgroundFocus"
    },
});

