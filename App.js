import * as React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/Helper';
import Router from "./src/Router/Router";

function App() {
  return (
    <Provider store={store}>
      <View style={{flex:1, justifyContent:'center',alignContent:'center'}}>
         <Router/>
      </View>
    </Provider>
  );
}

export default App;