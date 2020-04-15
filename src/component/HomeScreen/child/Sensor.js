import React, {Component} from 'react';
import {Container, Header, Text} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Progres from './Progress';
export default class LayoutExample extends Component {
  render() {
    return (
      <Grid>
        <Col style={{height: 300}}>
          <Row>
            <Progres/>
          </Row>
          <Row>
          <Progres/>
          </Row>
        </Col>
        <Col style={{ height: 300}}>
          <Row>
          <Progres/>
          </Row>
          <Row>
          <Progres/>
          </Row>
        </Col>
      </Grid>
    );
  }
}
