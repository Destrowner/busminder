import React from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Select } from '../screens'

import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden />

            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen
                    name='Select'
                    component={Select}
                />

                <Stack.Screen
                    name='TabNavigator'
                    component={TabNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )    
}

export default AppNavigator
