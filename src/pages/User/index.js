import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Container, Title, Box, Button, Input, Edit, Editor} from './styles';
import Axios from 'axios';

export default function User({navigation, route}) {
  const {repos} = route.params;
  const [listRepos, setListRepos] = useState([]);

  useEffect(() => {
    Axios.get(repos).then(res => setListRepos(res.data));
    console.log(listRepos);
  }, [repos]);

  return (
    <Container>
      <FlatList
        data={listRepos}
        keyExtractor={repository => String(repository.id)}
        renderItem={({item}) => (
          <Editor>
            <Box>
              <Title>{item.name}</Title>
            </Box>
            <Edit
              onPress={() =>
                navigation.navigate('Repos', {
                  activeRepos: item,
                  name: item.name,
                })
              }
            />
          </Editor>
        )}
      />
    </Container>
  );
}
