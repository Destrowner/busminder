import React from 'react'

import { SafeAreaView } from 'react-native'

import { Seats } from './components'

import styles from './styles'

const Home = () => {
    return (
        <SafeAreaView style={styles.screen}>
            <Seats />
        </SafeAreaView>
    )
}

export default Home
