import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import GameMenu from "./components/Pages/GameMenu";
import {NavigationContainer} from "@react-navigation/native";
import ModeComponent from "./components/Game/Mode";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={Tabs}
                    options={{headerShown: false}}
                />
                <Stack.Screen name="Mode" component={ModeComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'Random'} component={GameMenu}/>
            <Tab.Screen name={'About'} component={About}/>
        </Tab.Navigator>
    );
}