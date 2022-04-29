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

export default function Minsk({ navigation }) {
  const loadScreen = (screen) => {
    navigation.navigate(screen);
  };
  const link = (url) => {
    Linking.openURL(url);
  };

  const [slavReg, setSlavReg] = useState([
    {
      id: 1,
      text: 'сайт "POSTIM.BY"',
      url: "https://postim.by/minskaya-obl/dostoprimechatelnosti",
    },
    {
      id: 2,
      text: 'сайт "Сцежкі"',
      url: "https://tropinki.by/minskaya-oblast",
    },
    {
      id: 3,
      text: 'сайт "Ветліва"',
      url: "https://vetliva.by/belarus/what-to-see/?set_filter=y&arrFilter_35_1790921346=Y",
    },
    {
      id: 4,
      text: 'сайт "Планета Беларусь"',
      url: "https://planetabelarus.by/sights/filter/location-is-0000000142/",
    },
    {
      id: 5,
      text: 'сайт "лепшае ў Беларусі"',
      url: "https://bestbelarus.by/objects/?REGION_FILTR_12=55",
    },
    {
      id: 6,
      text: 'сайт "Traveling.by"',
      url: "https://traveling.by/belarus/sights/minskaja-oblast?t%5Bregion_id%5D=2&t%5Bsearch%5D=1",
    },
    {
      id: 7,
      text: 'сайт "Holiday.by"',
      url: "https://www.holiday.by/by/skarb/minsk-oblast",
    },
    {
      id: 9,
      text: 'сайт "TravelAgency"',
      url: "https://travelagency.by/mesta/dostoprimechatelnosti-minska/",
    },
    {
      id: 10,
      text: 'сайт "BELKRAJ"',
      url: "https://belkraj.by/be/landmarks",
    },
    {
      id: 11,
      text: 'сайт "nakarte.by"',
      url: "https://nakarte.by/kulturnoe-nasledie/minskaya",
    },
    {
      id: 12,
      text: 'сайт "VEDAJ.BY"',
      url: "https://vedaj.by/index.php/ru/goroda/minsk",
    },
    {
      id: 13,
      text: 'сайт "vedi.BY"',
      url: "https://vedi.by/idei-dlya-puteshestvij/224-chto-posmotret-v-minskoj-oblasti-chast-1",
    },
    {
      id: 14,
      text: 'сайт "poshyk.info"',
      url: "https://poshyk.info/be/tag/%D0%BC%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D0%BE%D0%B1%D0%BB/page/3/",
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
          Міншчыны
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
