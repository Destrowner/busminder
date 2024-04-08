import React from 'react'

import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native'

import styles from './styles'
import COLORS from '../../../../../theme/Colors'

const Seat = (props: any) => {
    const {
        seat,
        onSelectSeat,
    } = props

    return (
        <Pressable
            disabled={!seat.isAvailable}
            style={({ pressed }) => [
                styles.container,
                {
                    backgroundColor: seat.isAvailable ? COLORS.WHITE : COLORS.SEAT_DISABLED,
                    opacity: pressed ? 0.3 : 1,
                },
            ]}
            onPress={onSelectSeat}
        >
            <Text style={styles.name}>{seat.name}</Text>
        </Pressable>
    )
}

export default Seat
