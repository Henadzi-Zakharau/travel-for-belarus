import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Main({ navigation }) {
  const loadScene = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/compas.jpg")}
        style={styles.container1}
        onPress={() => loadScene("Attraction")}
      >
        <Text style={styles.text} onPress={() => loadScene("Attraction")}>
          Славутасці{"\n"}  па{"\n"}   абласцях
        </Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/city-walk.jpg")}
        style={styles.container1}
      >
        <Text style={styles.text3} onPress={() => loadScene("Beside")}>
          Вакол{"\n"}мяне
        </Text>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/images.jpg")}
        style={styles.container1}
      >
        <Text style={styles.text2} onPress={() => loadScene("Map")}>
          Мапа
        </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    
  },
  container1: {
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "100",
    left: 160,
    top: -5,
  },
  text2: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "100",
    left: 20,
    top: 100,
  },
  icon: {
    width: 50,
    height: 50,
    left: 150,
  },
  text3: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "100",
    left: 22,
    top: 100,
  },
});
