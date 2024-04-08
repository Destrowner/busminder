import React, {
    useState,
    useEffect,
} from 'react'

import {
    Platform,
    Linking,
    Alert,
    SafeAreaView,
} from 'react-native'

import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'

import { checkPermission } from '../../helpers/permissions'

import styles from './styles'

const Location = () => {
    const [region, setRegion] = useState<any>({
        isReady: false,
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    })

    useEffect(() => {
        checkPermission('location', {
            onGranted: () => {
                Geolocation.getCurrentPosition(({ coords }) => {
                    setRegion({
                        isReady: true,
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        latitudeDelta: 0.0421,
                        longitudeDelta: 0.0421,
                    })
                })
            },
            onLimited: () => {
                Alert.alert('"BusMinder" would like to access your location', 'Your location is used to show your poistion on the map', [
                    {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            if (Platform.OS === 'ios') {
                                Linking.openURL('app-settings:')
                            } else {
                                Linking.openSettings()
                            }
                        },
                    },
                ])
            },
            onBlocked: () => {
                Alert.alert('"BusMinder" would like to access your location', 'Your location is used to show your poistion on the map', [
                    {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            if (Platform.OS === 'ios') {
                                Linking.openURL('app-settings:')
                            } else {
                                Linking.openSettings()
                            }
                        },
                    },
                ])
            },
        })
    }, [])  

    return (
        <SafeAreaView style={styles.screen}>
            {
                region.isReady && (
                    <MapView
                        initialRegion={region}
                        showsUserLocation
                        showsMyLocationButton
                        followsUserLocation
                        showsCompass
                        scrollEnabled
                        zoomEnabled
                        pitchEnabled
                        rotateEnabled
                        style={styles.screen}
                    >
                        <Marker
                            title='Yor are here'
                            description='This is a description'
                            coordinate={region}
                        />
                    </MapView>
                )
            }
        </SafeAreaView>
    )
}

export default Location