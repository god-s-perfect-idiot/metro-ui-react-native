import { Text, TouchableWithoutFeedback, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";

export const Select = ({ options, onChange, title, classOverride = "" }) => {
  const [selected, setSelected] = useState(options[0]);
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState(37);

  useEffect(() => {
    setMaxHeight(20 + options.length * 37);
  }, [options]);

  return (
    <View className={`flex ${classOverride}`}>
      <Text className="text-[#b0b0b0] text-sm" style={fonts.light}>
        {title}
      </Text>
      <Animatable.View
        transition={["height"]}
        duration={300}
        style={{
          height: expanded ? maxHeight : 50,
          marginBottom: 0,
          flexDirection: "row",
          bottom: 0,
          width: "100%",
        }}
      >
        <View
          className={`mt-2 w-full pr-4 pl-2 py-1 text-base border-2 border-solid justify-center ${
            expanded ? "bg-white border-[#a013ec]" : " border-white"
          }`}
        >
          {expanded ? (
            <View className="flex flex-1 flex-col">
              {options.map((option, index) => {
                return <TouchableWithoutFeedback
                  onPress={() => {
                    setSelected(option);
                    onChange(option);
                    setExpanded(false);
                  }}
                >
                  <View
                    className={`flex flex-row items-center justify-between py-1 `}
                  >
                    <Text
                      className={`text-base ${
                        selected.value === option.value
                          ? "text-[#a013ec]"
                          : "text-black"
                      }`}
                      style={fonts.regular}
                    >
                      {option.name}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              })}
            </View>
          ) : (
            <TouchableWithoutFeedback onPress={() => setExpanded(true)}>
              <View className="flex flex-row items-center">
                <Text className="text-white text-base" style={fonts.regular}>
                  {selected.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </Animatable.View>
    </View>
  );
};
