import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";

export default function Map({ navigation }) {
  const loadScreen = () => {
    navigation.navigate("CheckOut", {
      distance: distance.toFixed(1),
      adress: adress,
    });
  };

  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [distance, setDistance] = useState(null);
  const [adress, setAdress] = useState();
  const [pin, setPin] = useState({
    latitude: 0.00825,
    latitudeDelta: 0.00921,
    longitude: 0.00509,
    longitudeDelta: 0.00425,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.00921,
        longitudeDelta: 0.00425,
      });
    })();
  }, []);

  const mapEl = useRef(null);

  const markLoc = pin;

  const loc = () => {
    if (destination == null) {
      return markLoc;
    } else {
      return destination;
    }
  };
  const userLocation = loc();

  return (
    <View style={styles.viewContainer}>
      <View>
        <GooglePlacesAutocomplete
          placeholder="Пошук"
          onPress={(data, details = null) => {
            setAdress(data.description);
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00921,
              longitudeDelta: 0.00425,
            });
          }}
          fetchDetails={true}
          query={{
            key: "" ,
            language: "en",
          }}
          styles={{
            container: { flex: 0, width: "100%", zindex: 1 },
            listView: { backgroundColor: "white" },
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ height: "100%", width: "100%" }}
          toolbarEnabled={true}
          initialRegion={location}
          showsUserLocation={true}
          userLocationFastestInterval={5000}
          showsTraffic={true}
          provider="google"
          ref={mapEl}
        >
          <Marker coordinate={userLocation} />

          {destination && (
            <MapViewDirections
              origin={location}
              destination={destination}
              apikey= ""
              strokeWidth={5}
              strokeColor="#FF4500"
              optimizeWaypoints={true}
              onReady={(result) => {
                setDistance(result.distance);
                mapEl.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 100,
                    left: 30,
                    top: 100,
                  },
                  animated: true,
                });
              }}
            />
          )}
        </MapView>
      </View>
      <View style={{ height: 45 }}>
        {distance && (
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.touchStyle} onPress={loadScreen}>
              <Text style={{ color: "#fff", fontSize: 20 }}>падрабязна :</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
  },
  touchStyle: {
    backgroundColor: "#F2994A",
    borderWidth: 2,
    borderRadius: 5,
    padding: 3,
    alignItems: "center",
    borderColor: "#FFD700",
  },
});
