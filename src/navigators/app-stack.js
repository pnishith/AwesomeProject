import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/app/home';
import Sidemenu from '../components/side-menu';

const AppFlow = createStackNavigator();

function AppStack() {
    return (
        <AppFlow.Navigator headerMode={'none'} initialRouteName={'App'}>
            <AppFlow.Screen name="App" component={Home} />
            {/* App Multiple screens here */}
        </AppFlow.Navigator>
    );
}

const Drawer = createDrawerNavigator();
export default function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <Sidemenu navigation={props.navigation} />}
            drawerStyle={{
                width: 250
            }}
            drawerPosition={'left'}
            drawerType={'front'}
            headerMode={'none'}
        >
            <Drawer.Screen name="Home" component={AppStack} />
        </Drawer.Navigator>
    );
}