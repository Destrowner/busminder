import React from 'react'

import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native'

import styles from './styles'

const Bus = (props: any) => {
    const {
        bus,
        onSelectBus,
    } = props

    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                { opacity: pressed ? 0.3 : 1 },
            ]}
            onPress={() => onSelectBus(bus)}
        >
            <View style={styles.header}>
                <Text style={styles.name}>{bus.name}</Text>
                <Text style={styles.route}>{bus.route}</Text>
            </View>

            <Image
                source={bus.image}
                style={styles.image}
            />
        </Pressable>
    )
}

export default Bus
