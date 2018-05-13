import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
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
  state = {
    shops: []
  }

  async componentDidMount() {
    const query = {
      query: '{ shops { _id, name, slug, photo, location { coordinates, address }, tags, ratings } }'
    };

    const response = await fetch('http://justcutt.com/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
    });
    const json = await response.json();

    const { shops } = json.data;

    this.setState({
      shops
    })
  }

  render() {
    return (
      <StyledView>
        <StyledText>{`Just Cutt`.toUpperCase()}</StyledText>
        <FlatList
          data={this.state.shops}
          renderItem={
            ({item}) => <Text>{item.name}</Text>
          }
          // react native is wierd with the key prop
          keyExtractor={(item, index) => index}
        />
      </StyledView>
    );
  }
}

export default App;
