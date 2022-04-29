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

export default function Magilew({ navigation }) {
  const loadScreen = (screen) => {
    navigation.navigate(screen);
  };
  const link = (url) => {
    Linking.openURL(url);
  };

  const [slavReg, setSlavReg] = useState([
    {
      id: 1,
      text: "Блог Антона Бородачёва",
      url: "https://my-travel-diary.by/dostoprimechatelnosti-mogileva.html",
    },
    {
      id: 2,
      text: 'сайт "Traveling.by"',
      url: "https://traveling.by/news/item/2275",
    },
    {
      id: 3,
      text: 'сайт "Holiday.by"',
      url: "https://www.holiday.by/by/skarb/mogilev-oblast",
    },
    {
      id: 4,
      text: 'сайт "Планета Беларусь"',
      url: "https://planetabelarus.by/publications/usadby-muzei-rodniki-i-monastyri-chto-posmotret-na-mogilevshchine-/",
    },
    {
      id: 5,
      text: 'сайт "Ветліва"',
      url: "https://vetliva.by/belarus/blog/gayd-po-mogilevu/",
    },
    {
      id: 6,
      text: 'сайт "YES!Belarus"',
      url: "https://yesbelarus.com/by/traveller-information/travel-ideas-destinations/city-guides/mogilev-mahilyow/",
    },
    {
      id: 7,
      text: 'сайт "TUDA-SUDA.BY"',
      url: "https://www.tuda-suda.by/countries/europe/belarus/mogilev",
    },
    {
      id: 8,
      text: 'сайт "vMogileve.by"',
      url: "https://vmogileve.by/showplace/",
    },
    {
      id: 9,
      text: 'сайт "JustArrived.by"',
      url: "https://justarrived.by/ru/blog/sights-of-the-mogilev-region",
    },
    {
      id: 10,
      text: 'сайт "TravelAgency.by"',
      url: "https://travelagency.by/mesta/dostoprimechatelnosti-mogilev/",
    },
    {
      id: 11,
      text: 'сайт "nakarte.by"',
      url: "https://nakarte.by/kulturnoe-nasledie/mogilevskaya",
    },
    {
      id: 12,
      text: 'сайт "VEDAJ.BY"',
      url: "https://vedaj.by/index.php/ru/goroda/mogilev",
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
          Магілёўскага рэгіёна
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
