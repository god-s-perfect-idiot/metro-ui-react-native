import { Text } from "react-native"
import { fonts } from "../../../styles/fonts"

export const MainTitle = ({title}) => {
    return (
        <Text className="text-white text-sm uppercase" style={fonts.semiBold}>
            {title}
        </Text>
    )
}