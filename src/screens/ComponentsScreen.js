import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ComponentsScreen = () => {
  const array = [
    { name: "Object1", color: "#ff0000" },
    { name: "Object2", color: "#00ff00" },
    { name: "Object3", color: "#0000ff" },
    { name: "Object4", color: "#ffff00" },
    { name: "Object5", color: "#ff00ff" },
    { name: "Object6", color: "#00ffff" },
    { name: "Object7", color: "#010aaa" },
    { name: "Object8", color: "#ffffff" },
    { name: "Object9", color: "#ff8800" },
    { name: "Object10", color: "#0088ff" },
  ];

  return (
    <FlatList
      //   horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      data={array}
      renderItem={({ item }) => {
        return (
          <Text style={[styles.listStyle, { backgroundColor: item.color }]}>
            {item.name}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    margin: 10,
    padding: 5,
    height: 40,
  },
  textStyle1: {
    fontSize: 30,
    color: "green",
  },
  textStyle2: {
    fontSize: 30,
    color: "red",
  },
});

export default ComponentsScreen;
