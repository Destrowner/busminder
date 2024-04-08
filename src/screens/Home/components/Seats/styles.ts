import { StyleSheet } from 'react-native'
import { perfectSize } from '../../../../helpers/dimensions'

export default StyleSheet.create({
    activity_indicator: {
        flex: 1,
    },
    seats: {
        paddingTop: perfectSize(79),
        paddingHorizontal: perfectSize(36),
    },
    seats_column: {
        flex: 1,
    },
    seats_column_wrapper: {
        width: perfectSize(108),
        justifyContent: 'space-between',
    },
    seats_column_separator: {
        height: perfectSize(14),
    },
})
