import { Alert, Platform, ToastAndroid, } from "react-native"

export const toast=(message:string)=>{
    if(Platform.OS==="android"){
        ToastAndroid.show(message,ToastAndroid.SHORT)
    }
    else if(Platform.OS==="ios"){
        Alert.alert(message)
    }
}