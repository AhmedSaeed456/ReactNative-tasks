import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`increase ${color} By 10`}
        onPress={() => onIncrease()}
      ></Button>
      <Button
        title={`decrease ${color} By 10`}
        onPress={() => onDecrease()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
