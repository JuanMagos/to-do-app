import React, { Component } from 'react';
import {
  Text, StyleSheet, View, FlatList,
} from 'react-native';
import Task from './Task';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Tareas </Text>
        <FlatList
          data={this.props.tasks}
          renderItem={({ item }) => <Task item={item} delete={this.props.delete} />}
        />
        <FlatList
          style={styles.pokemon}
          data={this.props.pokemon}
          renderItem={
          ({ item }) => <Text>{item.name}</Text>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
  },
  pokemon: {
    marginTop: 20,
  },
});

export default Body;
