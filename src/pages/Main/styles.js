import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #737373;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 10px;
  width: 40%;
  height: 50px;
  border-radius: 5px;
  background: lightskyblue;
  justify-content: center;
  align-items: center;
`;

export const BTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
