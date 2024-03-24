import { View } from "react-native";
import { MainTitle } from "../core/decorator/MainTitle";
import { PageTitle } from "../core/decorator/Pagetitle";

const renderMenu = (menu) => {
  switch (menu.collapsedType) {
  }
  return <View className="w-1/5 h-full bg-gray-100">{menu}</View>;
};

export const PageView = ({ page, menu, mainTitle, pageTitle }) => {
  return (
    <View className="w-full h-full flex items-start justify-start bg-black">
      <View className="w-full h-[94%] px-4 pt-4">
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
      <View className="w-full h-[6%]">{menu}</View>
    </View>
  );
};
