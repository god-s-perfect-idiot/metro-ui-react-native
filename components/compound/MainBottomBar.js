import React from "react";
import { QuickMenu } from "../core/action/MenuBar";
import { Check, X } from "react-native-feather";

const Menu = ({}) => {
  return (
    <QuickMenu
      options={[
        {
          text: "done",
          onPress: () => console.log("done"),
          Icon: <Check width={20} stroke={"white"} strokeWidth={3} />,
        },
        {
          text: "cancel",
          onPress: () => console.log("cancel"),
          Icon: <X width={20} stroke={"white"} strokeWidth={3} />,
        },
      ]}
    />
  );
};

export default Menu;
