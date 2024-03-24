import { Text, TouchableWithoutFeedback, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import { useState } from "react";

export const Select = ({ options, onChange, title, classOverride = "" }) => {
    const [selected, setSelected] = useState(options[0]);
    const [expanded, setExpanded] = useState(false);
    return (
        <View className={`flex ${classOverride}`}>
            <Text className="text-[#b0b0b0] text-sm" style={fonts.light}>
                {title}
            </Text>
            {expanded ? (
                <View className="bg-white mt-2 w-full py-2 pr-4 pl-2 text-base border-[#a013ec] border-2 border-solid justify-center item-center">
                    {options.map((option, index) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                setSelected(option);
                                onChange(option);
                                setExpanded(false);
                            }}>
                                <View className={`flex flex-row items-center justify-between py-1`}>
                                    <Text className={`text-base ${selected.value === option.value ? "text-[#a013ec]" : "text-black"}`} style={fonts.regular}>
                                        {option.name}
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })} 
                </View>
            ) : (
                <View className="mt-2 w-full pr-4 pl-2 py-1 text-base border-white border-2 border-solid justify-center item-center">
                    <TouchableWithoutFeedback onPress={() => setExpanded(true)}>
                        <View className="flex flex-row items-center">
                            <Text className="text-white text-base" style={fonts.regular}>
                                {selected.name}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </View>
    )
};