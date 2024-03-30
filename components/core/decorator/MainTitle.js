import { Text, View } from "react-native";
import { fonts } from "../../../styles/fonts";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);

export const MainTitle = ({ title }) => {
  return (
    <AnimatedView
      animation="fadeInLeft"
      duration={300}
      delay={0}
    >
      <Text className="text-white text-sm uppercase" style={fonts.semiBold}>
        {title}
      </Text>
    </AnimatedView>
  );
};
