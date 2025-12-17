import React from "react";
import { View } from "react-native";
import Node from "@/component/node";

const Index = () => {
  const [tree, setTree] = React.useState([
    {
      key: 1,
      isExpanded: true,
      title: "Grand Master",
      userName: "grand_master",
      imageUrl: "",
      children: [
        {
          key: 11,
          isExpanded: true,
          title: "Master A",
          userName: "master_a",
          imageUrl: "",
          children: [
            {
              key: 111,
              isExpanded: false,
              title: "Slave A1",
              userName: "slave_a1",
              imageUrl: "",
              children: [
                {
                  key: 111,
                  isExpanded: false,
                  title: "Slave A1",
                  userName: "slave_a1",
                  imageUrl: "",
                },
                {
                  key: 112,
                  isExpanded: false,
                  title: "Slave A2",
                  userName: "slave_a2",
                  imageUrl: "",
                },
              ],
            },
            {
              key: 112,
              isExpanded: false,
              title: "Slave A2",
              userName: "slave_a2",
              imageUrl: "",
            },
          ],
        },
        {
          key: 12,
          isExpanded: false,
          title: "Master B",
          userName: "master_b",
          imageUrl: "",
          children: [
            {
              key: 121,
              isExpanded: false,
              title: "Slave B1",
              userName: "slave_b1",
              imageUrl: "",
            },
            {
              key: 122,
              isExpanded: false,
              title: "Slave B2",
              userName: "slave_b2",
              imageUrl: "",
              children: [
                {
                  key: 1221,
                  isExpanded: false,
                  title: "Child B2-1",
                  userName: "child_b2_1",
                  imageUrl: "",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 2,
      isExpanded: false,
      title: "Independent Master",
      userName: "ind_master",
      imageUrl: "",
      children: [
        {
          key: 21,
          isExpanded: false,
          title: "Slave C1",
          userName: "slave_c1",
          imageUrl: "",
        },
      ],
    },
  ]);

  const toggleNode = (node: any, key: number): any => {
    return node.map((item: any) => {
      if (key === item.key) {
        return {
          ...item,
          isExpanded: !item.isExpanded,
        };
      }
      if (item.children?.length > 0) {
        return {
          ...item,
          children: toggleNode(item.children, key),
        };
      }

      return item;
    });
  };

  const handleExpandNode = (key: number) => {
    setTree((prevTree: any) => {
      return toggleNode(prevTree, key);
    });
  };

  return (
    <View>
      {tree.map((item: any, index: number) => {
        return (
          <Node
            node={item}
            key={index}
            onPress={(key) => handleExpandNode(key)}
          />
        );
      })}
    </View>
  );
};
export default Index;
