import { Touchable, TouchableWithoutFeedback, View } from "react-native";
import { MainTitle } from "../core/decorator/MainTitle";
import { PageTitle } from "../core/decorator/Pagetitle";
import { IconList, MenuBar, QuickMenu } from "../core/action/MenuBar";
import RoundedButton from "../core/action/RoundedButton";
import { useState } from "react";

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

export const PageView = ({ pages, menu, mainTitle }) => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <View className="w-full h-full flex items-start justify-start bg-black">
      <View className="w-full h-full px-4 pt-4">
        {mainTitle && (
          <View className="mb-4">
            <MainTitle title={mainTitle} />
          </View>
        )}
        <View className="mb-4 flex flex-row w-full">
          {pages.map((page, index) => (
            <TouchableWithoutFeedback
              onPress={() => setCurrentPage(index)}
              className="background-[#cab]"
            >
              <View>
                <PageTitle
                  title={page.title}
                  classOverride="mr-5"
                  isActive={index === currentPage}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        {pages[currentPage].content}
      </View>
      {menu && renderMenu(menu)}
    </View>
  );
};
