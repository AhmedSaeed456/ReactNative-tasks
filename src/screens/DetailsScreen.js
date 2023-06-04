import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Details from "../components/Details";

const DetailsScreen = (props) => {
  return (
    <View>
      <Details title="beach" img={require("../../assets/beach.jpg")} />
      <Details title="forest" img={require("../../assets/forest.jpg")} />
      <Details title="mountain" img={require("../../assets/mountain.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsScreen;
