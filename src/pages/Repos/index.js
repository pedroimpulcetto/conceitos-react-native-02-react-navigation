import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default function Repos({route}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{fontSize: 22}}>{route.params.activeRepos.name}</Text>
    </View>
  );
}
