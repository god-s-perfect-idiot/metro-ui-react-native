import { Text, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);

export const PageTitle = ({
  title,
  isUpperCase = false,
  classOverride = "",
  isActive = true,
}) => {
  return (
    <AnimatedView animation="fadeInLeft" duration={300} delay={0}>
      <Text
        className={`${isActive ? "text-white" : "text-[#656565]"} text-5xl pb-2 ${
          isUpperCase ? "" : "lowercase"
        } ${classOverride}`}
        style={fonts.light}
      >
        {title}
      </Text>
    </AnimatedView>
  );
};
