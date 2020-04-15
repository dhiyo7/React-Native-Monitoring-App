import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
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
      tabBarIcon: ({tintColor}) => {
        return <Icon name="home-outline" size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      // ...
      tabStyle: {
          paddingTop: 10,
          borderTopColor: '#3A3',
      }
  }
  },
  ScanScreen: {
    screen: Scan,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Scan',
      tabBarIcon: ({tintColor}) => {
        return <AntIcon name="scan1" size={20} color={tintColor} />;
      },
    }),
  },
  ReportScreen: {
    screen: Report,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Report',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="clipboard-pulse-outline" size={20} color={tintColor} />;
      },
    }),
  },
  AccountScreen: {
    screen: Account,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: 'Account',
      tabBarIcon: ({tintColor}) => {
        return <Icon name="account-outline" size={20} color={tintColor} />;
      },
    }),
  },
    
});

export default createAppContainer(BottomNav);
