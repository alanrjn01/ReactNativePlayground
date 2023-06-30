import React from 'react';
import { View } from 'react-native';
import Main from './src/components/Main';
import Navigator from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native'
import Login from './src/components/Login';
import { Provider } from 'react-redux';
import {store} from './src/reduxStore/store'

function App(): JSX.Element {

return (
  <Provider store={store}>
      <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  </Provider>
  );
}

export default App;
