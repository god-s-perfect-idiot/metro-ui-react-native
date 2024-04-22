import { View, Text, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);
export const Pivot = ({ children, index }) => {
  return (
    <AnimatedView
      animation="fadeInLeft"
      duration={300}
      delay={(index + 1) * 100}
    >
      {children}
    </AnimatedView>
  );
};
{
  /* Keep this. 0.73 should have the correct pivot animation soon enough. Until then, use the hackfix slide in */
}
{
  /* <Animated.View
  style={{
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    transform: [{ rotateY: interpolatedRotation }],
    transformStyle: 'preserve-3d',
    transformOrigin: 'left center'
  }}
>
  {children}
</Animated.View> */
}
