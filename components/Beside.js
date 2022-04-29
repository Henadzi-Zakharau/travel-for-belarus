import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Image, Linking } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { response } from "./Markers";

export default function Beside({ navigation }) {
  const loadScreen = (screen) => {
    navigation.navigate(screen);
  };

  const [locationBeside, setLocationBeside] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      setLocationBeside({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0721,
        longitudeDelta: 0.0225,
      });
    })();
  }, []);

  const mapRef = useRef(null);

  return (
    <View style={styles.full}>
      <View style={styles.full}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          toolbarEnabled={true}
          initialRegion={locationBeside}
          showsUserLocation={true}
          userLocationFastestInterval={5000}
          provider="google"
          ref={mapRef}
        >
          {response.map((marker) => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              onCalloutPress={() => {
                if (marker.url === "") {
                  return;
                } else {
                  Linking.openURL(marker.url);
                }
              }}
            >
              <Image source={marker.icon} style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
        </MapView>
      </View>
      <View style={styles.buttonScreen}>
        <SimpleLineIcons
          style={styles.iconMap}
          name="map"
          size={28}
          color="white"
          onPress={() => loadScreen("Map")}
        />
        <SimpleLineIcons
          style={styles.iconDirections}
          name="directions"
          size={28}
          color="white"
          onPress={() => loadScreen("Attraction")}
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
    flex: 9,
    color: "#888",
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
  iconHome: {
    width: "33%",
  },
  iconDirections: {
    width: "33%",
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
