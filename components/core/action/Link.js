import { Text, TouchableWithoutFeedback, View } from "react-native"
import { fonts } from "../../../styles/fonts";

const Link = ({
    // to,
    disabled = false,
    classOverride = "",
    onPress = () => {},
    isLowerCase = true,
    text
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Text className={`${disabled ? "text-[#8a8a8a]" : "text-white"} text-sm underline ${classOverride} ${isLowerCase && "lowercase"}`} style={fonts.light}>
                {text}
            </Text>
        </TouchableWithoutFeedback> 
    )
}

export default Link;