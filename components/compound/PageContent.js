import { View } from "react-native";
import { Pivot } from "../../animations/Pivot";

export const PageContent = ({ items }) => {
  return (
    <View className="w-full h-full flex flex-col">
      {items.map((item, index) => {
        return (
          <View className="mb-8" key={index}>
            <Pivot index={index}>{item}</Pivot>
          </View>
        );
      })}
    </View>
  );
};
