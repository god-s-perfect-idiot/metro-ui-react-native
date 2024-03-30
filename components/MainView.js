import { View, Text, StatusBar } from "react-native";
import { MainTitle } from "./core/decorator/MainTitle";
import { Check, X } from "react-native-feather";
import { PageView } from "./compound/PageView";
import { Select } from "./core/action/Select";
import { Button } from "./core/action/Button";
import Link from "./core/action/Link";
import { TextBox } from "./core/action/TextBox";
import { Switch } from "./core/action/Switch";
import { PageContent } from "./compound/PageContent";

const Page = () => {
  return (
    <PageContent
      items={[
        <Select
          options={[
            {
              name: "Option 1",
              value: "option1",
            },
            {
              name: "Option 2",
              value: "option2",
            },
          ]}
          onChange={(e) => console.log(e)}
          title="This is a Selection"
        />,
        <Button text="Button" onPress={() => console.log("clicked")} />,
        <Link
          text="Learn More using this link"
          onPress={() => console.log("clicked")}
        />,
        <TextBox
          placeholder="Enter your text here"
          onChange={(e) => console.log(e)}
          title="This is a text box"
        />,
        <Switch
          title="This is a switch"
          onChange={(e) => console.log(e)}
          description="This is what a switch would look like. You can change the value by touching the slider."
        />,
      ]}
    />
    // <View className="w-full h-full flex flex-col">
    //   <View className="mb-8">
    //     <Select options={[
    //       {
    //         name: "Option 1",
    //         value: "option1",
    //       },
    //       {
    //         name: "Option 2",
    //         value: "option2",
    //       }
    //     ]} onChange={(e) => console.log(e)} title="This is a Selection"/>
    //   </View>
    //   <View className="mb-8">
    //     <Button text="Button" onPress={() => console.log("clicked")}/>
    //   </View>
    //   <View className="mb-8">
    //     <Link text="Learn More using this link" onPress={() => console.log("clicked")}/>
    //   </View>
    //   <View className="mb-8">
    //     <TextBox placeholder="Enter your text here" onChange={(e) => console.log(e)} title="This is a text box"/>
    //   </View>
    //   <View className="mb-8">
    //     <Switch title="This is a switch" onChange={(e) => console.log(e)} description="This is what a switch would look like. You can change the value by touching the slider."/>
    //   </View>
    // </View>
  );
};

export const MainView = ({ navigation, route }) => {
  return (
    <View className="w-full h-full flex flex-col">
      <PageView
        page={<Page />}
        menu={{
          menuType: "simple",
          list: [
            {
              icon: <Check stroke="white" />,
              onPress: () => {},
              text: "Ok",
            },
            {
              icon: <X stroke="white" />,
              onPress: () => {},
              text: "Close",
            },
          ],
        }}
        mainTitle={"Dummy Application"}
        pageTitle={"homepage"}
      />
    </View>
  );
};
