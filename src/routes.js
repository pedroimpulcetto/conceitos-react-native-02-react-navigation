import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/Main';
import User from './pages/User';
import Repos from './pages/Repos';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Profile',
          }}
        />
        <AppStack.Screen
          name="User"
          component={User}
          options={({route}) => ({title: route.params.name})}
        />
        <AppStack.Screen
          name="Repos"
          component={Repos}
          options={({route}) => ({title: route.params.name})}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
