import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const RandomColorsScreen = (props) => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="add random color"
        onPress={() => {
          setColors([...colors, genearteRandomColors()]);
        }}
      />

      <FlatList
        style={{}}
        contentContainerStyle={{
          justifyContent: "center",
        }}
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "100%",
                height: 100,
                backgroundColor: item,
                margin: 5,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const genearteRandomColors = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
const styles = StyleSheet.create({});

export default RandomColorsScreen;
