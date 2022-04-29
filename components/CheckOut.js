import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";

const CheckOut = (props) => {
  const showDistance = props.route.params.distance;

  const [fuelConsumption, setFuelConsumption] = React.useState(null);
  const [fuelCost, setFuelCost] = React.useState(null);

  const fuelConsKm = (d) => {
    return d * 10;
  };

  const fuelCostMll = (f) => {
    return (f / 1000) * fuelConsKm(fuelConsumption);
  };

  const costFuel = (f) => {
    return f * fuelCostMll(fuelCost);
  };
  const costSum = costFuel(showDistance);

  const distFuel = () => {
    return (fuelConsumption / 100) * showDistance;
  };
  const fuelSum = distFuel();

  //console.log(typeof user)

  return (
    <ScrollView style={styles.scrollStyle}>
      <Text
        style={{
          color: "#FFFFE0",
          paddingTop: 30,
          justifyContent: "center",
          padding: 20,
        }}
      >
        Адрэс: {props.route.params.adress}{" "}
      </Text>
      <Text style={styles.textStyle}>
        Адлегласць: {props.route.params.distance} км.
      </Text>

      <Text style={styles.textStyle}>
        Колькасць паліва: {fuelSum.toFixed(1)} л.
      </Text>
      <Text style={styles.textStyle}>
        Кошт паліва: {costSum.toFixed(2)} руб.
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={setFuelConsumption}
        value={fuelConsumption}
        placeholderTextColor="yellow"
        placeholder="Увядзіце выдатак паліва"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setFuelCost}
        value={fuelCost}
        placeholder="Увядзіце кошт паліва"
        keyboardType="numeric"
        placeholderTextColor="yellow"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#A52A2A",
    color: "#FFFAFA",
    fontSize: 18,
    justifyContent: "center",
    margin: 10,
  },
  scrollStyle: {
    backgroundColor: "#24243e",
  },
  textStyle: {
    paddingTop: 10,
    color: "#FFFFE0",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#FFFFE0",
  },
});

export default CheckOut;
