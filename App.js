import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import EasyModeComponent from "./components/Game/EasyMode";

export default function App() {
    const Tab = createMaterialBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Home"}
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{backgroundColor: '#837fe8'}}
            >
                <Tab.Screen name={'Home'} component={Home}/>
                <Tab.Screen name={'Random'} component={EasyModeComponent}/>
                <Tab.Screen name={'About'} component={About}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}