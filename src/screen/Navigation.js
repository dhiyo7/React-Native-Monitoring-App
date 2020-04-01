import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from './HomeScreen';
// import Article from './ArticleScreen';
import Scan from './ScanQRScreen';
import Report from './ReportScreen';
import Account from './AccountScreen';

const BottomNav = createBottomTabNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="home-outline" size={20} color={tintColor} />;
      },
    }),
  },
  // ArticleScreen: {
  //   screen: Article,
  //   navigationOptions: ({navigation}) => ({
  //     tabBarLabel: 'Article',
  //     tabBarIcon: ({focused, tintColor}) => {
  //       return <Icon name="newspaper" size={20} color={tintColor} />;
  //     },
  //   }),
  // },
  ScanScreen: {
    screen: Scan,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Scan',
      tabBarIcon: ({focused, tintColor}) => {
        return <AntIcon name="scan1" size={20} color={tintColor} />;
      },
    }),
  },
  ReportScreen: {
    screen: Report,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Report',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="clipboard-pulse-outline" size={20} color={tintColor} />;
      },
    }),
  },
  AccountScreen: {
    screen: Account,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Account',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="account-outline" size={20} color={tintColor} />;
      },
    }),
  },
});

export default createAppContainer(BottomNav);
