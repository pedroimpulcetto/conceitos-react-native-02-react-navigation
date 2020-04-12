import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import User from './pages/User';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main',
          }}
        />
        <AppStack.Screen name="User" component={User} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
