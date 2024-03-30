import { View, Text, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatedView = Animatable.createAnimatableComponent(View);

export const PageContent = ({ items }) => {
  return (
    <View className="w-full h-full flex flex-col">
      {items.map((item, index) => {
        return <View className="mb-8" key={index}>
          <AnimatedView
            animation="fadeInLeft"
            duration={300}
            delay={(index + 1) * 100}
          >
            {item}
          </AnimatedView>
        </View>;
      })}
    </View>
  );
};
