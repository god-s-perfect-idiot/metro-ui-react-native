import { useRef, useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import RoundedButton from "./RoundedButton";
import * as Animatable from "react-native-animatable";
import { fonts } from "../../../styles/fonts";

const ShortMenu = ({ children, handleExpand }) => {
  return (
    <View className="bg-[#222222] h-14 w-full flex flex-row justify-between items-center">
      {children}
      <TouchableWithoutFeedback onPress={handleExpand}>
        <View className="w-[15%] h-full items-start justify-center flex flex-row gap-1 pt-2">
          <View className="w-1 h-1 bg-white rounded-full" />
          <View className="w-1 h-1 bg-white rounded-full" />
          <View className="w-1 h-1 bg-white rounded-full" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const MenuBar = ({ options, controls }) => {
  const [expanded, setExpanded] = useState(false);
  if (!expanded) {
    return (
      <ShortMenu handleExpand={() => setExpanded(true)}>{controls}</ShortMenu>
    );
  } else {
    return (
      <View className={`bg-[#222222] h-2/5 w-full flex flex-col`}>
        <ShortMenu handleExpand={() => setExpanded(false)}>
          {controls}
        </ShortMenu>
        <ScrollView className="w-full h-full">
          <View className="flex flex-col gap-16 mx-4 w-full my-4">
            {/* sadly there is no gap in react-native yet */}
            {options}
          </View>
        </ScrollView>
      </View>
    );
  }
};

export const iconList = ({ options }) => {
  return (
    <View className="flex flex-row">
      {options.map((option, index) => {
        return (
          <TouchableWithoutFeedback onPress={option.onPress} key={index}>
            <View className="flex flex-col justify-between items-center mx-4 my-2 mb-3">
              <RoundedButton Icon={option.icon} />
              {expanded && (
                <Text
                  className="text-white text-xs lowercase"
                  style={fonts.light}
                >
                  {option.text}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export const QuickMenu = ({ options }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const contentHeight = useRef(new Animated.Value(60)).current;

  const animateExpand = () => {
    // Start height animation
    Animated.timing(contentHeight, {
      toValue: expanded ? 80 : 60,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateExpand();
  }, [expanded]);

  return (
    <Animated.View
      transition={["height"]}
      duration={300}
      // if this looks ugly, its probable because of the hardcoded values
      style={{
        height: contentHeight,
        marginBottom: 0,
        flexDirection: "row",
        backgroundColor: "#222",
        position: "absolute",
        bottom: 0,
        width: "100%",
        overflow: "hidden", // Important to prevent content from showing during animation
      }}
    >
      <View className={`w-[15%] flex`} />
      <View className={`w-[70%] justify-center items-center flex-row`}>
        {options.map((option, index) => (
          <TouchableWithoutFeedback onPress={option.onPress} key={index}>
            <View
              className={`flex flex-col justify-between items-center mx-4 my-2 mb-3`}
            >
              <RoundedButton Icon={option.icon} />
              {expanded && (
                <Text className={`text-white text-xs lowercase mt-1`}>
                  {option.text}
                </Text>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <TouchableWithoutFeedback onPress={toggleExpanded}>
        <View
          className={`w-[15%] h-full items-start justify-center flex flex-row gap-1 pt-2`}
        >
          <View className={`w-1 h-1 bg-white rounded-full`} />
          <View className={`w-1 h-1 bg-white rounded-full`} />
          <View className={`w-1 h-1 bg-white rounded-full`} />
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
