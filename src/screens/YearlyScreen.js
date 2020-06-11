import React, {useEffect} from 'react';
import {FlatList,} from 'react-native';
import Card from '../components/Card';
import AddStore from "../store/AddStore";
import {observer} from "mobx-react";

function YearlyScreen() {
    useEffect(() => {
        AddStore.get_items('yearly');
    }, []);
    return (
        <FlatList
            data={AddStore.yearly}
            renderItem={({item}) => <Card
                item={item}
            />}
            keyExtractor={(item, index) => `key-${index}`}
        />
    );
}

export default (observer(YearlyScreen));
