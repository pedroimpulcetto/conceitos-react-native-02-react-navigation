import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin: 20px 0 20px 0;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #737373;
`;

export const Bio = styled.Text`
  font-size: 16px;
  color: #777;
`;

export const Company = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 50px;
  background: #737373;
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

export const BTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: lightgrey;
`;
