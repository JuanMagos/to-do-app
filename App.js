import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Body from './Body';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=20',
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({ loading: true });
    fetch(this.state.url)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          pokemon: res.results,
          url: res.next,
          loading: false,
        });
      });
  };

  renderText = (value) => {
    console.log(value);
    this.setState({ text: value });
  }

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { text: this.state.text, key: Date.now() }],
      text: '',
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.key !== id);
    this.setState({
      tasks: newTasks,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Descargando Pokemon!</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Header textChange={this.renderText} add={this.addTask} text={this.state.text} />
        <Body pokemon={this.state.pokemon} tasks={this.state.tasks} delete={this.deleteTask} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
