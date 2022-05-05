import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signin from './pages/Signin';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
    </>

    <View>
      <Text>Reac Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
