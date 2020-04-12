import React from 'react';

import {Container, Button, BTitle} from './styles';

export default function Main({navigation}) {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('User')}>
        <BTitle>User</BTitle>
      </Button>
    </Container>
  );
}
