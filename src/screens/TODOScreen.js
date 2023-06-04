import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Form,
} from "react-native";

const TODOScreen = (props) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [task, setTask] = useState([]);
  const handleAddButton = () => {
    console.log(textInputValue);
    setTask([...task, textInputValue]);
    setTextInputValue("");
  };

  const handleDeleteItem = (index) => {
    const updatedTask = [...task];
    updatedTask.splice(index, 1);
    setTask(updatedTask);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="enter new task todo"
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
      />
      <Button title="Add" onPress={handleAddButton} />
      {/* color picker */}

      {/* color picker */}
      <FlatList
        keyExtractor={(item) => item}
        data={task}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.todo}>
              <Text style={{ color: "white", fontSize: 20 }}>{item}</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  handleDeleteItem(index);
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
              </TouchableOpacity>
            </View>
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

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginVertical: 10,
  },
  todo: {
    height: 60,
    width: "90%",
    backgroundColor: "orange",
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
  },
  btn: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});

export default TODOScreen;
