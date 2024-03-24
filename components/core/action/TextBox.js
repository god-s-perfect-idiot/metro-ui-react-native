import { Text, TextInput, View } from "react-native"
import { fonts } from "../../../styles/fonts"
import { useState } from "react"

export const TextBox = ({
    defaultValue,
    onChangeText,
    onSubmitText,
    classOverrides = "",
    title="",
    placeholder="Enter URL"
}) => {
    const [focused, setFocused] = useState(false)
    if (title == "") {
        return (
            <TextInput 
                className={`bg-[#c9c9c9] w-full h-10 px-4 text-base ${classOverrides}`}
                style={fonts.regular} 
                cursorColor={"black"} 
                selectionColor={"#a013ec"} 
                placeholder={placeholder} 
                defaultValue={defaultValue} 
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitText}
            />
        ) 
    } else {
        return (
            <View className={`flex w-full ${classOverrides}`}>
                <Text className="text-[#b0b0b0] text-md mb-1" style={fonts.light}>
                    {title}
                </Text>
                <TextInput 
                    className={`${focused ? "bg-white" : "bg-[#bfbfbf]"}  w-full h-10 px-4 text-base`} 
                    style={fonts.regular} 
                    cursorColor={"black"} 
                    selectionColor={"#a013ec"} 
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder={placeholder} 
                    defaultValue={defaultValue} 
                    onChangeText={onChangeText}
                    onSubmitEditing={onSubmitText}
                />
            </View>
        )
    }
}