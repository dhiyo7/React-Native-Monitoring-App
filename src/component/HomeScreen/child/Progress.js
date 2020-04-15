//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

// create a component
class Progress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={56}
          tintColor="#0be881"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#B9CCBD"
        />
        <Text>
          Kelembaban
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Progress;
