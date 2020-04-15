import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {Container, Content, Card, CardItem, Body} from 'native-base';
import Progress from './child/Progress';
import HeaderCustom from './child/Header';
import Sensor from './child/Sensor';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container >
        <HeaderCustom style={{flex:1}}  />
        <Content padder>
          <Card style={{marginTop:170, boderRadius: 17}}>
            <CardItem bordered>
              <Body>
                <Sensor/>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}