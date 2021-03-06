import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { Login} from '../../redux/action/Login';

export default function Logindex({navigation}:any) {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}></View>
            <View style={styles.logview}>
                <View style={{
                    position: 'relative',
                    flex: 2,
                }}>
                    <Text style={{
                        position: 'absolute',
                        top: 50,
                        left:25,
                        fontSize: 30,
                    }}>
                        Lorem, ipsum dolor.
                    </Text>
                    <Text style={{
                        position: 'absolute',
                        left:25,
                        top: 90,
                        fontSize: 15,
                    }}>
                        Lorem, ipsum dolor.
                    </Text>
                </View>
                <View style={{ flex: 2, }}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: '15%',
                        right: '15%',
                        justifyContent: 'center',
                    }}
                    onPress={() =>navigation.push('Login')}
                    >
                        <Text style={{
                            paddingHorizontal: 30,
                            paddingVertical: 15,
                            borderRadius: 10,
                            backgroundColor: '#4e4e4e',
                            justifyContent: 'center',
                            color: 'white'
                        }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: '15%',
                        left: '15%',
                        justifyContent: 'center',
                    }}
                    onPress={()=>navigation.push('Register')}
                    >
                        <Text style={{
                            paddingHorizontal: 30,
                            paddingVertical: 15,
                            borderRadius: 10,
                            backgroundColor: '#4e4e4e',
                            justifyContent: 'center',
                            color: 'white'
                        }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
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