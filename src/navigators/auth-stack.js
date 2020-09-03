import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/authorization/login'

const AuthFlow = createStackNavigator();
export default function AuthStack() {
    return (
        <AuthFlow.Navigator headerMode={'none'}>
            <AuthFlow.Screen name="Login" component={Login} />
        </AuthFlow.Navigator>
    );
}