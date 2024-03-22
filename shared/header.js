import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header({ navigation }) {
    const displayDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={displayDrawer}>
                <Entypo name="menu" size={28} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={styles.headerText}> Gamezone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
});
