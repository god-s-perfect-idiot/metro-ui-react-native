import { View, Text, StatusBar } from "react-native";
import BottomBar from "./compound/MainBottomBar";
import { MainTitle } from "./core/decorator/MainTitle";
import { PageView } from "./compound/PageView";

export const MainView = ({ navigation, route }) => {
  return (
    <View className="w-full h-full flex flex-col">
      {/* <View className="w-full bg-black">
        <MainTitle title="Dummy Application"/>
      </View>
      <BottomBar/> */}
      <PageView
        page={<View />}
        menu={<BottomBar />}
        mainTitle={"Dummy Application"}
        pageTitle={"homepage"}
      />
    </View>
  );
};
