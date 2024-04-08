import React from 'react'

import {
    SafeAreaView,
    View,
    Text,
} from 'react-native'

import { Buses } from './components'

import styles from './styles'

const Select = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.title}>Select your route</Text>
            </View>

            <Buses />
        </SafeAreaView>
    )
}

export default Select
