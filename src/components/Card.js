import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from "./Colors";
import Strings from "./Strings";
import AddStore from "../store/AddStore";

export default function Card({item}) {
    const options = {
        title,
        subject: `${title}`,
        message: `${date} tarihli notum: ${title} ${content}`,
    };

    const {title, content, date, month, year, day, id} = item;
    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <Text>{`${Strings.header}: ${title}`}</Text>
                <View style={styles.btnRow}>
                    <TouchableOpacity onPress={() => AddStore.delete({id})} style={styles.btn}>
                        <AntDesign name={"delete"} size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Share.open(options)} style={styles.btn}>
                        <AntDesign name={"sharealt"} size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.time}>
                <Text>{`${Strings.date}: ${day}.${month + 1}.${year} / ${(new Date(date).toLocaleTimeString())}`}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>{content}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        borderColor: Colors.light,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
    },
    btnRow: {
        flexDirection: 'row'
    },
    btn: {
        marginRight: 10
    },
    header: {
        padding: 10,
        backgroundColor: Colors.card,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    time: {
        padding: 10
    },
    content: {
        padding: 20
    }
});

