import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Linking,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Gomel({ navigation }) {
  const loadScreen = (screen) => {
    navigation.navigate(screen);
  };
  const link = (url) => {
    Linking.openURL(url);
  };

  const [slavReg, setSlavReg] = useState([
    {
      id: 1,
      text: 'сайт "34TRAVEL.ME"',
      url: "https://34travel.me/gotobelarus/post/aroundhomel",
    },
    {
      id: 2,
      text: 'сайт "белка"',
      url: "https://belkagomel.by/2020/07/11/puteshestvuem-po-gomelskoj-oblasti-5-mest-dlya-neplyazhnogo-otdyxa/",
    },
    {
      id: 3,
      text: 'сайт "Ветліва"',
      url: "https://vetliva.by/belarus/what-to-see/?set_filter=y&arrFilter_35_1212055764=Y",
    },
    {
      id: 4,
      text: 'сайт "Планета Беларусь"',
      url: "https://planetabelarus.by/sights/filter/location-is-0000000095/",
    },
    {
      id: 5,
      text: 'сайт "лепшае ў Беларусі"',
      url: "https://bestbelarus.by/objects/?REGION_FILTR_12=58",
    },
    {
      id: 6,
      text: 'сайт "Traveling.by"',
      url: "https://traveling.by/belarus/sights/gomel-oblast?t%5Bregion_id%5D=5&t%5Bdistrict_id%5D=0&t%5Bsearch%5D=1",
    },
    {
      id: 7,
      text: 'сайт "Holiday.by"',
      url: "https://www.holiday.by/by/skarb/gomel-oblast",
    },
    {
      id: 8,
      text: 'сайт "POSTIM.BY"',
      url: "https://postim.by/gomelskaya-obl/intersnye-mesta",
    },
    {
      id: 9,
      text: 'сайт "TravelAgency"',
      url: "https://travelagency.by/mesta/dostoprimechatelnosti-gomel/",
    },

    {
      id: 11,
      text: 'сайт "nakarte.by"',
      url: "https://nakarte.by/kulturnoe-nasledie/gomelskaya",
    },
    {
      id: 12,
      text: 'сайт "VEDAJ.BY"',
      url: "https://vedaj.by/index.php/ru/goroda/gomel",
    },
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0f0c29", "#0575E6", "#302b63"]}
        style={styles.full}
      >
        <Text style={{ padding: 20, color: "#FFFFE0" }}>
          На гэтай старонке сабраныя рэсурсы, якія распавядаюць аб славутасцях
          Гомельскай вобласці
        </Text>
        <FlatList
          data={slavReg}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                link(item.url);
              }}
            >
              <Text style={styles.textStyle}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </LinearGradient>
      <View style={styles.buttonScreen}>
        <SimpleLineIcons
          style={styles.iconMap}
          name="map"
          size={26}
          color="white"
          onPress={() => loadScreen("Map")}
        />
        <SimpleLineIcons
          style={styles.iconlocation}
          name="location-pin"
          size={26}
          color="white"
          onPress={() => loadScreen("Beside")}
        />
        <SimpleLineIcons
          style={styles.iconDirections}
          name="directions"
          size={26}
          color="white"
          onPress={() => loadScreen("Attraction")}
        />
        <SimpleLineIcons
          style={styles.iconHome}
          name="home"
          size={26}
          color="white"
          onPress={() => loadScreen("Main")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  full: {
    flex: 12,
    marginTop: 30,
  },
  buttonScreen: {
    flex: 1,
    backgroundColor: "#F2994A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
  },
  iconMap: {
    width: "25%",
  },
  iconlocation: {
    width: "25%",
  },
  iconHome: {
    width: "25%",
  },
  iconDirections: {
    width: "25%",
  },
  textStyle: {
    fontFamily: "lb-reg",
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFE0",
    marginLeft: 10,
  },
});
