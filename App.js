
import React, { useState }  from 'react';
import Navigate from './Navigate';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'lb-reg': require('./assets/fonts/Lobster-Regular.ttf'),
  'pf-disp': require('./assets/fonts/PlayfairDisplay-Black.ttf'),
});

export default function App() {
  const [font, setFont] = useState(false);
  
  if(font) {
    return (
        <Navigate/>
     );
  }else{
    return (
      <AppLoading startAsync={fonts} onFinish={()=> setFont(true)} onError={console.warn}/>
    );
  }
}
