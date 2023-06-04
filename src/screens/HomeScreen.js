import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
const HomeScreen = (props) => {
  var [c, setState] = useState("red");
  return (
    <View>
      <Text style={[styles.text, { color: c }]}>HomeScreen</Text>
      <Button
        title="open components screen"
        onPress={() => {
          setState(() => (c == "red" ? "yellow" : "red"));
          props.navigation.navigate("Components");
        }}
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
        <Text style={styles.text}>click here</Text>
      </TouchableOpacity>

      <Button
        title="open Details screen"
        onPress={() => {
          props.navigation.navigate("Details");
        }}
      />
      <Button
        title="open Random Colors screen"
        onPress={() => {
          props.navigation.navigate("Random");
        }}
      />
      <Button
        title="open Gradient Colors screen"
        onPress={() => {
          props.navigation.navigate("Gradient");
        }}
      />
      <Button
        title="open TODO screen"
        onPress={() => {
          props.navigation.navigate("TODO");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
