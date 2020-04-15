import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View} from 'react-native';
import GradientHeader from 'react-native-gradient-header';

export default class Header extends Component {
  render() {
    return (
        <GradientHeader
          title="Dhiyo Reksa"
          subtitle="Tugas Akhir iki Cuy"
          imageSource={require('../../../assets/profile.jpg')}
          gradientColors={['#0be881', '#05c46b']}
          shadowColor="#B9CCBD"
        />
    );
  }
}

