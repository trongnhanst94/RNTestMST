import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from '../actions/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

// Counter.prototype = {
//   incrementAsync: PropTypes.func.isRequired,
//   increment: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   counter: PropTypes.number.isRequired,
// };

export default Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clicked: {counter} times</Text>
      <TouchableHighlight onPress={() => dispatch(increment())}>
        <Text style={styles.text}>+</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(decrement())}>
        <Text style={styles.text}>-</Text>
      </TouchableHighlight>
    </View>
  );
}
