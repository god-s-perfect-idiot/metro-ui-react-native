import { Text, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);

export const PageTitle = ({ title, isUpperCase = false }) => {
  return (
    <AnimatedView animation="fadeInLeft" duration={300} delay={0}>
      <Text
        className={`text-white text-5xl pb-2 ${isUpperCase ? "" : "lowercase"}`}
        style={fonts.light}
      >
        {title}
      </Text>
    </AnimatedView>
  );
};
