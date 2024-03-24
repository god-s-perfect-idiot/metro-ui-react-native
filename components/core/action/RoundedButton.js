import { View } from "react-native";

const RoundedButton = ({
    classOverrides = "",
    Icon
}) => {
    return (
        <View className={`rounded-full border-white border-2 h-9 w-9 flex items-center justify-center ${classOverrides}`}>
            {Icon}
        </View>
    )
}

export default RoundedButton; 