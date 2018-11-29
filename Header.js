import React, { Component } from 'react';
import {
  Text, StyleSheet, View, TextInput,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Crea una nueva tarea </Text>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.textChange}
          placeholder="Tarea nueva"
          onSubmitEditing={this.props.add}
          value={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00FF00',
  },
  texto: {
    paddingHorizontal: 16,
  },
});

export default Header;
