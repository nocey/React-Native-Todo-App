import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

export default class Nav extends Component {
    render() {
        return (
            <View style={style.nav}>
                <View>
                <Link to='/'
                    style={style.link}
                    >
                       <Text style={style.text}>Home</Text>
                    </Link>
                </View>
                <View>
                    <Link to='/todo'
                    style={style.link}
                    >
                       <Text style={style.text}>todo</Text>
                    </Link>
                </View>
                <View>
                <Link to='/profile'
                    style={style.link}
                    >
                       <Text style={style.text}>Profile</Text>
                    </Link>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    nav:{
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom:0,
        width:'100%',
        height:'10%',
        backgroundColor:'black',
    },
    text:{
        borderWidth:2,
        borderColor:'white',
        color:'white',
        padding:'11.5%',
    },
    link:{
        margin:0,
        padding:0,
    }
})