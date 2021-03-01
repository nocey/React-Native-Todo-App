import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function Home ({navigation}: {navigation: any}) {
    return (
            <View style={styles.container}>
                <Text> Home </Text>
                <Button title="Profile" onPress={()=>navigation.navigate('SharedTodo')}/>
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