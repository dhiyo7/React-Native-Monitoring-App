import React, {Component} from 'react';
import {
  Content,
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import HomeComponent from '../../component/HomeScreen/index.';
export default class HeaderMultipleIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body style={{alignContent: 'center'}}>
            <Title>Plug & Plant</Title>
          </Body>
        </Header>
        <Content>
          <HomeComponent />
        </Content>
      </Container>
    );
  }
}
