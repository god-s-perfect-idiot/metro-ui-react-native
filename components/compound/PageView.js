import {
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MainTitle } from "../core/decorator/MainTitle";
import { PageTitle } from "../core/decorator/Pagetitle";
import { IconList, MenuBar, QuickMenu } from "../core/action/MenuBar";
import RoundedButton from "../core/action/RoundedButton";
import { useEffect, useRef, useState } from "react";

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
  // const [currentPage, setCurrentPage] = useState(0);
  const [referencePages, setReferencePages] = useState(pages);
  const scrollViewRef = useRef(null);

  // useEffect(() => {
  //   console.log("Current Page: ", currentPage);
  //   console.log("Reference Pages: ", referencePages);
  // }, [currentPage, referencePages]);

  const scrollHeader = () => {
    // scrollViewRef.current?.scrollTo({
    //   y: pages[(currentPage - 1) >= 0 ? currentPage - 1 : 0].title.length * 32 * currentPage,
    //   animated: true,
    // });

  };

  // const rotateRight = () => {
  //   const newPages = referencePages.slice();
  //   const lastPage = newPages.pop();
  //   newPages.unshift(lastPage);
  //   setReferencePages(newPages);
  // } 
  
  // const rotateLeft = () => {
  //   // const newPages = referencePages.slice();
  //   // const firstPage = newPages.shift();
  //   // newPages.push(firstPage);
  //   // setReferencePages(newPages);

  // }

  const arrangePages = (index) => {
    const newPages = referencePages.slice(index);
    const oldPages = referencePages.slice(0, index);
    setReferencePages(newPages.concat(oldPages));
  }

  const changePage = (index) => {
    // setCurrentPage(index);
    arrangePages(index);
  }

  return (
    <View className="w-full h-full flex items-start justify-start bg-black">
      <View className="w-full h-full px-4 pt-4">
        {mainTitle && (
          <View className="mb-4">
            <MainTitle title={mainTitle} />
          </View>
        )}
        {/* Change height if you change any font size */}
        <SafeAreaView className="w-full h-[3rem] flex items-start justify-start pr-50">
          <ScrollView
            className="mb-4 flex w-full"
            horizontal={true}
            scrollEnabled={true}
            ref={scrollViewRef}
          >
            {referencePages.map((page, index) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  changePage(index);
                }}
                key={index}
              >
                <View>
                  <PageTitle
                    title={page.title}
                    classOverride="mr-5"
                    isActive={index === 0}
                  />
                </View>
              </TouchableWithoutFeedback>
            ))}
            <View className="w-screen" />
          </ScrollView>
        </SafeAreaView>
        {referencePages[0].content}
      </View>
      {menu && renderMenu(menu)}
    </View>
  );
};
