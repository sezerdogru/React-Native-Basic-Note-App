import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "./Colors";

export default function FAB({onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.btnStyle}>
            <Ionicons name={"ios-add"} size={40} color={Colors.white}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fabStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    btnStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        backgroundColor: Colors.statusBar,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    }
});
