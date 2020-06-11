import React, {useEffect} from 'react';
import {FlatList,} from 'react-native';
import Card from '../components/Card';
import AddStore from "../store/AddStore";
import {observer} from "mobx-react";

function MonthlyScreen() {
    useEffect(() => {
        AddStore.get_items('monthly');
    }, []);
    return (
        <FlatList
            data={AddStore.monthly}
            renderItem={({item}) => <Card
                item={item}
            />}
            keyExtractor={(item, index) => `key-${index}`}
        />
    );
}

export default (observer(MonthlyScreen));
