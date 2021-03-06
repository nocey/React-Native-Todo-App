import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../../redux/action/Login';

export default function Home({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const login = useSelector(state => state.Login);
  return (
    <View style={styles.container}>
      <Text> Home </Text>
      {login ? <Button title="Log In" onPress={() => dispatch(Login(false))} />:  <Button title="Log Out" onPress={() => dispatch(Login(true))} />}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,

  },
  text: {
    backgroundColor: 'black'
  },

});