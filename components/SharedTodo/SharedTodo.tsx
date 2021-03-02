import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function SharedTodo() {
    const offset = useSharedValue(0);
    const defaultSpringStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(offset.value * 255) }],
        };
    });
    return (
        <View>
            <Animated.View style={[styles.box, defaultSpringStyles]} />
            <Button onPress={() => (offset.value = Math.random())} title="Move" />
        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
    }
})