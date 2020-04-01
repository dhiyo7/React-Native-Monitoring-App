import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  Left,
  Button,
  Icon,
} from 'native-base';
import Progress from './child/Progress';
export default class CardItemBordered extends Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Grafik Sensor</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Left/>
              <Progress/>
              <Right/>
              <Left/>
              <Body>
              <Text>Sensor A</Text>
              </Body>
              <Right/>
            </Body>
            <Body>
              <Left/>
              <Progress/>
              <Right/>
              <Left/>
              <Body>
              <Text>Sensor A</Text>
              </Body>
              <Right/>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
