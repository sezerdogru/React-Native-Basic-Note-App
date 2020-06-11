import React, {useEffect} from 'react';
import {FlatList,} from 'react-native';
import Card from '../components/Card';
import AddStore from "../store/AddStore";
import {observer} from "mobx-react";

function DailyScreen() {
    useEffect(() => {
        AddStore.get_items();
    }, []);
    return (
        <FlatList
            data={AddStore.daily}
            renderItem={({item}) => <Card
                item={item}
            />}
            keyExtractor={(item, index) => `key-${index}`}
        />
    );
}

export default (observer(DailyScreen));
