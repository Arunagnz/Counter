import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header, Button, Text } from "react-native-elements";

export default function App() {
  const [value, setValue] = useState(0);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);
  const reset = () => setValue(0);

  return (
    <View>
      <Header
        placement="left"
        leftComponent={{
          icon: "watch",
          color: "#fff",
          paddingLeft: 10,
          paddingRight: 10,
        }}
        centerComponent={{
          text: "Counter",
          style: { color: "#fff", ...styles.text },
        }}
        containerStyle={styles.header}
      />

      <View>
        <Text style={styles.value} h2>
          {value}
        </Text>
        <View style={[styles.view]}>
          <Button
            buttonStyle={styles.buttonStyle}
            style={styles.btn}
            title="Increment"
            onPress={increment}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            style={styles.btn}
            title="Decrement"
            onPress={decrement}
          />
          <Button
            buttonStyle={styles.buttonStyle}
            style={styles.btn}
            title="Reset"
            onPress={reset}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  value: {
    color: "black",
    textAlign: "center",
    paddingTop: 20,
  },
  text: {
    fontSize: 23,
  },
  header: {
    backgroundColor: "green",
  },
  btn: {
    paddingTop: 10,
  },
  buttonStyle: {
    width: 110,
    backgroundColor: "green",
  },
});
