import React, {useState} from 'react';
import {Button, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Strings from "../components/Strings";
import Colors from "../components/Colors";
import AddStore from "../store/AddStore";

export default function AddScreen({navigation, title}) {
    const [date, setDate] = useState((new Date()).getTime());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [note, onChangeText] = useState('');
    const [noteDetail, setNoteDetail] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const add = async () => {
        await AddStore.addItem({note, noteDetail, date});
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, {height: 40}]}
                onChangeText={text => onChangeText(text)}
                placeholder={Strings.enterNotName}
                value={note}
            />
            <View style={styles.row}>
                <Button
                    onPress={showDatepicker}
                    title={Strings.selectDate}
                    color={Colors.statusBar}
                />
                <Button
                    onPress={showTimepicker}
                    title={Strings.selectTime}
                    color={Colors.statusBar}
                />
                <Text>{((new Date(date)).toLocaleString())}</Text>
            </View>
            <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                onChangeText={noteDetail => setNoteDetail(noteDetail)}
                placeholder={Strings.note}
                value={noteDetail}
            />
            <Button
                onPress={add}
                title={Strings.add}
                color={Colors.statusBar}
            />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20
    },
    container: {
        flex: 1,
        padding: 10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-around'
    },
});

