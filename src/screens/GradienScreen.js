import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ColorCounter from "../components/ColorCounter";

const counterValue = 15;

const GradientScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, count) => {
    console.log("here");
    if (color === "red") {
      if (red + count < 255 || red + count >= 0) setRed(red + count);
    } else if (color === "green") {
      if (green + count < 255 || green + count > 0) setGreen(green + count);
    } else if (color === "blue") {
      if (blue + count > 255 || blue + count < 0) {
        console.log(blue);

        return;
      } else {
        console.log(blue);
        setBlue(blue + count);
      }
    }
  };

  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor("red", counterValue)}
        onDecrease={() => setColor("red", -1 * counterValue)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setColor("green", counterValue)}
        onDecrease={() => setColor("green", -1 * counterValue)}
      />
      <ColorCounter
        color="blue"
        onIncrease={() => setColor("blue", counterValue)}
        onDecrease={() => setColor("blue", -1 * counterValue)}
      />
      <View
        style={{
          width: "100%",
          height: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
          margin: 5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default GradientScreen;
