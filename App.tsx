/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PrivateStack } from '@navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <PrivateStack />
    </NavigationContainer>
  );
}

export default App;
