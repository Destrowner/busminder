import React, { useEffect } from 'react'

import {
    useDispatch,
    useSelector,
} from 'react-redux'

import {
    ActivityIndicator,
    FlatList,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { fetchBuses } from '../../../../store/reducers/buses'
import { selectBus } from '../../../../store/reducers/bus'

import COLORS from '../../../../theme/Colors'

import Bus from './components'

import styles from './styles'

const Buses = () => {
    const navigation = useNavigation()

    const {
        buses,
        isLoading,
    } = useSelector((state: any) => state.buses)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBuses())
    }, [])

    const onSelectBus = (bus: any) => {
        // @ts-ignore
        navigation.navigate('TabNavigator')

        dispatch(selectBus(bus))
    }

    return (
        isLoading
        ? (
            <ActivityIndicator
                color={COLORS.MAIN}
                size='large'
                style={styles.activity_indicator}
            />
        )
        : (
            <FlatList
                data={buses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Bus
                        bus={item}
                        onSelectBus={onSelectBus}
                    />
                )}
            />
        )
    )
}

export default Buses