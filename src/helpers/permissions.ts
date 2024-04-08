import { Platform } from 'react-native'

import {
    check,
    request,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions'

const onCheckedPermission = (
    permission: any,
    result: any,
    callbacks: any,
) => {
    switch (result) {
        case RESULTS.DENIED: {
            request(permission).then((result) => {
                onCheckedPermission(permission, result, callbacks)
            })

            break
        }
        case RESULTS.GRANTED: {
            callbacks.onGranted()

            break
        }
        case RESULTS.LIMITED: {
            callbacks.onLimited()

            break
        }
        case RESULTS.BLOCKED: {
            callbacks.onBlocked()

            break
        }
    }
}

export const checkPermission = async(
    permission: any,
    callbacks: any,
) => {
    switch (permission) {
        case 'location': {
            if (Platform.OS === 'ios') {
                check(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
                    onCheckedPermission(PERMISSIONS.IOS.LOCATION_ALWAYS, result, callbacks)
                })
            } else {
                check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
                    onCheckedPermission(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, result, callbacks)
                })
            }

            break
        }
    }
}
