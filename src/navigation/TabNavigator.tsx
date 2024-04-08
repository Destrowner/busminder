import React from 'react'

import {
    View,
    Text,
} from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { useSelector } from 'react-redux'

import {
    Home,
    Info,
    Location,
} from '../screens'

import {
    Bus,
    Map,
    Info as InfoIcon,
    Speed,
} from '../assets/icons'

import { perfectSize } from '../helpers/dimensions'

import COLORS from '../theme/Colors'

import styles from './styles'

const Tab = createBottomTabNavigator()

const Header = (props: any) => {
    const { route } = props

    const { bus } = useSelector((state: any) => state.bus)

    return (
        <View style={styles.header}>
            <Text style={styles.title}>{route.name === 'Home' ? 'Seat availability' : route.name}</Text>

            <View style={styles.info}>
                <View style={styles.bus}>
                    <Text style={styles.name}>{bus?.name}</Text>
                    <Text style={styles.route}>{bus?.route}</Text>
                </View>

                {
                    route.name === 'Home'
                    ? (
                        <View style={styles.seats_info}>
                            <View style={styles.seat_info}>
                                <Text style={styles.seat_info_title}>Reserved</Text>

                                <View style={styles.seat_info_indicator_disabled}></View>
                            </View>

                            <View style={styles.seat_info}>
                                <Text style={styles.seat_info_title}>Available</Text>

                                <View style={styles.seat_info_indicator}></View>
                            </View>
                        </View>
                    )
                    : (
                        <View style={styles.speed_info}>
                            <Speed />

                            <Text style={styles.speed_value}>{bus.speed}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: perfectSize(81),
                    backgroundColor: COLORS.WHITE,
                    shadowOpacity: 0,
                    elevation: 0,
                },
                header: ({ route }) => {
                    return <Header route={route} />
                },
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: () => <Bus />
                }}
            />

            <Tab.Screen
                name='Location'
                component={Location}
                options={{
                    tabBarIcon: () => <Map />
                }}
            />
            
            <Tab.Screen
                name='Info'
                component={Info}
                options={{
                    tabBarIcon: () => <InfoIcon />,
                }}
                listeners={{
                    tabPress: (event) => {
                        event.preventDefault()
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator
