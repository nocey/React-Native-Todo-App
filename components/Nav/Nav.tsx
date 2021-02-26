import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Nav extends Component {
    render() {
        return (
            <View style={style.nav}>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    nav:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:'10%',
        backgroundColor:'black',
    }
})