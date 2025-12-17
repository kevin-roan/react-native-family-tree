import React from "react";
import styles from "./styles";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Node = ({
  node,
  onPress,
}: {
  node: any;
  onPress: (key: number) => void;
}) => {
  const hasChildren = node.children?.length > 0;

  return (
    <>
      <TouchableOpacity
        onPress={() => onPress(node.key)}
        style={styles.container}
      >
        <View style={styles.chevRon}>
          <Entypo name="chevron-right" size={18} color="black" />
        </View>
        <View style={styles.row}>
          <Image
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F5%2FUser-Avatar-PNG-Picture.png&f=1&nofb=1&ipt=6a709ddfd35a91617d436f7daeb509dcb3c6b3637b77043756fbd7bb64d088d4",
            }}
            style={styles.avatar}
          />
          <View style={styles.vstack}>
            <Text style={styles.userName}>{node.title}</Text>
            <Text style={styles.userName}>{node.userName}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {hasChildren && node.isExpanded && (
        <>
          <Arrow />
          {node.children.map((child: any) => (
            <View key={child.key} style={{ marginStart: 100 }}>
              <Node node={child} onPress={(key) => onPress(key)} />
            </View>
          ))}
        </>
      )}
    </>
  );
};

export default Node;

const Arrow = () => {
  return <View style={styles.arrow}></View>;
};
