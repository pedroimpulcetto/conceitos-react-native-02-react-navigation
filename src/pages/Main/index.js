import React, {useState, useEffect} from 'react';
import {Text, Image, View} from 'react-native';
import api from '../../services/api';
import {
  Container,
  Avatar,
  Header,
  Name,
  Bio,
  Company,
  Button,
  BTitle,
} from './styles';

export default function Main({navigation}) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function loadInfo() {
      const res = await api.get('users/pedroimpulcetto');
      setUser(res.data);
    }
    loadInfo();
  }, []);

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar_url}} />
        <Name>{user.name}</Name>
        <Company>{user.company}</Company>
        <Bio>{user.bio}</Bio>
      </Header>

      <Button
        onPress={() =>
          navigation.navigate('User', {
            repos: user.repos_url,
            name: user.name,
          })
        }>
        <BTitle>Repositories</BTitle>
      </Button>
    </Container>
  );
}
