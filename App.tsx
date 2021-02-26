import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav/Nav';
import { NativeRouter, Route} from "react-router-native";
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';


export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <Route exact path='/' component={Home}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/todo' component={Todo}></Route>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Nav/>
      <StatusBar style="auto" />
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0,

  },
  text:{
    backgroundColor: 'black'
  },

});


