import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Attraction({ navigation }) {
  const loadScreen = (screen) => {
    navigation.navigate(screen);
  };
  const loadReg = (region) => {
    navigation.navigate(region);
  };

  return (
    <View style={styles.full}>
      <LinearGradient
        colors={["#004e92", "#000428"]}
        style={styles.linearStyle}
      >
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/Brest_Region.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Brest")}>
            Брэсцкая вобласць
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/Vitsebsk_Voblasts.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Vitebsk")}>
            Віцебская вобласць
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/Homyel_Voblast.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Gomel")}>
            Гомельская вобласць
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/Hrodna_Voblasts.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Grodna")}>
            Гродзенская вобласць
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/Mohilev_Oblast.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Magilew")}>
            Магілёўская вобласць
          </Text>
        </View>
        <View style={styles.viewStyle}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/of_Minsk.png")}
          />
          <Text style={styles.text} onPress={() => loadReg("Minsk")}>
            Мінская вобласць
          </Text>
        </View>
      </LinearGradient>

      <View style={styles.buttonScreen}>
        <SimpleLineIcons
          style={styles.iconMap}
          name="map"
          size={28}
          color="white"
          onPress={() => loadScreen("Map")}
        />
        <SimpleLineIcons
          style={styles.iconlocation}
          name="location-pin"
          size={28}
          color="white"
          onPress={() => loadScreen("Beside")}
        />
        <SimpleLineIcons
          style={styles.iconHome}
          name="home"
          size={28}
          color="white"
          onPress={() => loadScreen("Main")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 10,
    marginTop: 15,
  },
  linearStyle: {
    flex: 10,
    marginTop: 15,
  },
  buttonScreen: {
    flex: 1,
    backgroundColor: "#F2994A",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 60,
    justifyContent: "center",
  },
  iconMap: {
    width: "33%",
  },
  iconlocation: {
    width: "33%",
  },
  iconHome: {
    width: "33%",
  },
  text: {
    padding: 10,
    color: "white",
    fontSize: 16,
    top: 20,
    fontFamily: "pf-disp",
  },
  imageStyle: {
    width: 40,
    height: 50,
    padding: 10,
    top: 20,
  },
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 20,
  },
});
