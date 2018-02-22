import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
  font-size: 54px;
  font-family: Avenir;
`;

class App extends Component {
  render() {
    return (
      <StyledView>
        <StyledText>{`Just Cutt`.toUpperCase()}</StyledText>
      </StyledView>
    );
  }
}

export default App;
