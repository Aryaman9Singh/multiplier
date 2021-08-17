import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {Num: 0};
  }
  multiplier = () => {
    var N = parseInt(this.state.Num);
    for (let i = 1; i <= 10; i++) {
      <Text style={styles.table}>
        {this.N} X {i} = {this.N * i}
      </Text>;
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <TextInput
            style={styles.input}
            placeholder="enter any number"
            keyboardType="numeric"
            onChangeText={Num => this.setState({Num})}
          />
          <Button title="print table" onPress={this.multiplier} />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  table: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});
