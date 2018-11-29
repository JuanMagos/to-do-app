import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          { this.props.item.text }
        </Text>
        <TouchableOpacity onPress={() => { this.props.delete(this.props.item.key); }}>
          <Ionicons name="ios-close" size={30} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    width: 300,
    marginTop: 5,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
  },
  texto: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Task;
