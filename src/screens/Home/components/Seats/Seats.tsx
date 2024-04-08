import React from 'react'

import { useSelector } from 'react-redux'

import {
    ActivityIndicator,
    FlatList,
    View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import COLORS from '../../../../theme/Colors'

import Seat from './components'

import styles from './styles'

const SeatsColumn  = (props: any) => {
    const {
        column,
        onSelectSeat,
    } = props

    return (
        <FlatList
            data={column.seats}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
                <Seat
                    seat={item}
                    onSelectSeat={onSelectSeat}
                />
            )}
            ItemSeparatorComponent={() => <View style={styles.seats_column_separator}/>}
            style={[
                styles.seats_column,
                { alignItems: column.id === 1 ? 'flex-start' : 'flex-end' },
            ]}
            columnWrapperStyle={styles.seats_column_wrapper}
        />
    )
}

const Seats = () => {
    const navigation = useNavigation()

    const { bus } = useSelector((state: any) => state.bus)

    const onSelectSeat = () => {
        // @ts-ignore
        navigation.navigate('Location')
    }

    return (
        !bus
        ? (
            <ActivityIndicator
                color={COLORS.MAIN}
                size='large'
                style={styles.activity_indicator}
            />
        )
        : (
            <FlatList
                data={bus.seats}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <SeatsColumn
                        column={item}
                        onSelectSeat={onSelectSeat}
                    />
                )}
                style={styles.seats}
            />
        )
    )
}

export default Seats