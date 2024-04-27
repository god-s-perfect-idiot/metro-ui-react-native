import React, { useRef, useEffect } from "react";
import { View, Animated, Dimensions, Text, StyleSheet } from "react-native";
import { fonts } from "../../../styles/fonts";
const { width } = Dimensions.get("window");

const DotAnimation = () => {
  const dotPosition1 = useRef(new Animated.Value(0)).current;
  const dotPosition2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationLoop1 = Animated.loop(
      Animated.sequence([
        Animated.timing(dotPosition1, {
          toValue: width * 0.35,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition1, {
          toValue: width * 0.65,
          duration: (width * 0.3) / (((width * 0.35) / 400) * 0.1),
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition1, {
          toValue: width,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition1, {
          toValue: -100,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.delay(2000), // Add a 200ms delay after each cycle
      ])
    );

    const animationLoop2 = Animated.loop(
      Animated.sequence([
        Animated.delay(400), // Fixed delay of 100ms for the second dot
        Animated.timing(dotPosition2, {
          toValue: width * 0.35,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition2, {
          toValue: width * 0.65,
          duration: (width * 0.3) / (((width * 0.35) / 400) * 0.1),
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition2, {
          toValue: width,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(dotPosition2, {
          toValue: -100,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.delay(1600), // Add a 200ms delay after each cycle
      ])
    );

    animationLoop1.start();
    animationLoop2.start();

    return () => {
      animationLoop1.stop();
      animationLoop2.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: "#a013ec",
            transform: [
              {
                translateX: dotPosition1,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: "#a013ec",
            transform: [
              {
                translateX: dotPosition1,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: "#a013ec",
            transform: [
              {
                translateX: dotPosition1,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: "#a013ec",
            transform: [
              {
                translateX: dotPosition1,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.dot,
          {
            backgroundColor: "#a013ec",
            transform: [
              {
                translateX: dotPosition1,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  dot: {
    width: 4,
    height: 4,
    marginLeft: 8,
  },
});



export const Loader = ({ text }) => {
  return (
    <View className="flex flex-col justify-center w-full h-full bg-black">
      <DotAnimation />
      <Text className="text-white mt-2 text-center" style={fonts.regular}>
        {text}...
      </Text>
    </View>
  );
};
