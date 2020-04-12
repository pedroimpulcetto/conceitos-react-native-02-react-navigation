import React from 'react';

import {Container, Button, BTitle} from './styles';

export default function User({navigation}) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Main')}>
        <BTitle>Go back</BTitle>
      </Button>
    </Container>
  );
}
