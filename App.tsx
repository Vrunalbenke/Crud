import {StyleSheet, Text, View} from 'react-native';
import React from 'react'
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import Home from './src/screens/HomeSreen/Home';
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  
});
