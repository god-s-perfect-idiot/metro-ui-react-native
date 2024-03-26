import { Touchable, TouchableWithoutFeedback, View } from "react-native";
import { MainTitle } from "../core/decorator/MainTitle";
import { PageTitle } from "../core/decorator/Pagetitle";
import { IconList, MenuBar, QuickMenu } from "../core/action/MenuBar";
import RoundedButton from "../core/action/RoundedButton";

const renderMenu = (menu) => {
  switch (menu.menuType) {
    case "simple":
      return <QuickMenu options={menu.list} />;
    case "icon-list":
      // fix this
    case "custom-list":
        // fix this
    case "none":
    default:
      return <View></View>;
  }
};

export const PageView = ({ page, menu, mainTitle, pageTitle }) => {
  return (
    <View className="w-full h-full flex items-start justify-start bg-black">
      <View className="w-full h-full px-4 pt-4">
        {mainTitle && (
          <View className="mb-4">
            <MainTitle title={mainTitle} />
          </View>
        )}
        {pageTitle && (
          <View className="mb-4">
            <PageTitle title={pageTitle} />
          </View>
        )}
        {page}
      </View>
      {/* <View className="w-full">{menu}</View> */}
      {menu && renderMenu(menu)}
    </View>
  );
};
