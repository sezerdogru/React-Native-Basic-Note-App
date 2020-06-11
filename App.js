import * as React from 'react';
import {StatusBar} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "mobx-react";
import store from './src/store';
import HomeScreen from "./src/screens/HomeScreen";
import Colors from "./src/components/Colors";
import AddScreen from "./src/screens/AddScreen";


const Stack = createStackNavigator();

function App() {
    return (
        <>
            <StatusBar backgroundColor={Colors.statusBar} barStyle={'light-content'}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Notlarım',
                            headerStyle: {
                                backgroundColor: Colors.statusBar,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                alignSelf: 'center',
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="Add"
                        component={AddScreen}
                        options={{
                            title: 'Yeni not ekle',
                            headerStyle: {
                                backgroundColor: Colors.statusBar,
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default App;
