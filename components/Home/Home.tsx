import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Home </Text>
            </View>
        )
    }
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