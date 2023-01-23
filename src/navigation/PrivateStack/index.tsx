import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DASHBOARD, MOVIE_DETAILS } from '@helpers';
import BottomTabNavigator from '../Bottom';
import { MovieDetails } from '@screens';

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={DASHBOARD} component={BottomTabNavigator} />
      <Stack.Screen
        options={{ headerShown: true, title: 'Detalle' }}
        name={MOVIE_DETAILS}
        component={MovieDetails}
      />
    </Stack.Navigator>
  );
};

export default PrivateStack;
