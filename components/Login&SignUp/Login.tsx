import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { Login } from '../../redux/action/Login';

export default function Logins() {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <TextInput placeholder='Login' style={styles.border} placeholderTextColor="white" maxLength={20} />
            <TextInput placeholder='Password' style={styles.border} placeholderTextColor="white" />
            <Button title="Log in" onPress={() => dispatch(Login(false))} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f9c4a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,

    },
    border:{
        height: 40, borderColor: 'white', borderWidth: 1 ,borderRadius:10, width:250, color:'black',marginBottom:10,padding:5
    },
    logo: {
        flex: 2,
    },
    logview: {
        flex: 2,
        backgroundColor: '#dfdfdf',
        width: '100%',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    }
});