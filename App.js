import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';
import api from './src/Services/Api';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

export default function App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: []
    }
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({
      filmes: response.data
    })
  }

render() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={this.state.filmes}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Filme data={item} />}
       />
    <View>
      <Text>Reac Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
