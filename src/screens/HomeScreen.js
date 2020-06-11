import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FAB from "../components/FAB";
import DailyScreen from "./DailyScreen";
import Strings from "../components/Strings";
import MonthlyScreen from "./MonthlyScreen";
import YearlyScreen from "./YearlyScreen";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                tabBarOptions={{
                    indicatorStyle: {}
                }}>
                <Tab.Screen name={Strings.today} component={DailyScreen}/>
                <Tab.Screen name={Strings.monthly} component={MonthlyScreen}/>
                <Tab.Screen name={Strings.yearly} component={YearlyScreen}/>
            </Tab.Navigator>
            <FAB onPress={() => navigation.navigate('Add')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5F5F5',
    },
});
