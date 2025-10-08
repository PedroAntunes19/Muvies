import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import { StackScreen } from 'react-native-screens';

const stack = createNativeStackNavigator();

export default function appNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{ headerShown: false }}
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}