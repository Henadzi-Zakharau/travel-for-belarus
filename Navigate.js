import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main';
import Attraction from './components/Attraction';
import Beside from './components/Beside';
import Map from './components/Map';
import CheckOut from './components/CheckOut';
import Brest from './components/regions/Brest';
import Vitebsk from './components/regions/Vitebsk';
import Gomel from './components/regions/Gomel';
import Grodna from './components/regions/Grodna';
import Magilew from './components/regions/Magilew';
import Minsk from './components/regions/Minsk';

const Stack = createNativeStackNavigator();

export default function Navigate()  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Attraction"
          component={Attraction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Beside"
          component={Beside}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{headerTitle: 'Падрабязнасці', cardOverlayEnabled: true }}
        />
        <Stack.Screen
          name="Brest"
          component={Brest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Vitebsk"
          component={Vitebsk}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gomel"
          component={Gomel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Grodna"
          component={Grodna}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Magilew"
          component={Magilew}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Minsk"
          component={Minsk}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};