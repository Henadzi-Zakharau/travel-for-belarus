import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, TouchableOpacity  } from "react-native";


export default function Main({ navigation }) {
  const loadScene = (page) => {
    navigation.navigate(page);
  };

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <TouchableOpacity onPress={() => loadScene("Attraction")}>
       <Image style={styles.imageStyle}
       source={require("../assets/compas3.jpg")}
       />
       </TouchableOpacity> 
      </View>

      <View style={styles.container1}>
      <TouchableOpacity onPress={() => loadScene("Beside")}>
       <Image style={styles.imageStyle}
       source={require("../assets/city-walk1.jpg")}
       />
       </TouchableOpacity> 
      </View>

      <View style={styles.container1}>
      <TouchableOpacity onPress={() => loadScene("Map")}>
       <Image style={styles.imageStyle}
       source={require("../assets/mapa.jpg")}
       />
       </TouchableOpacity>
      </View>
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
  icon: {
    width: 50,
    height: 50,
    left: 150,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    
  }
});
