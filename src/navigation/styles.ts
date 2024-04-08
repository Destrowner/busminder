import { StyleSheet } from 'react-native'

import { perfectSize } from '../helpers/dimensions'

import COLORS from '../theme/Colors'
import FONTS from '../theme/Fonts'

export default StyleSheet.create({
    header: {
        height: perfectSize(168),
        justifyContent: 'flex-end',
        paddingBottom: perfectSize(18),
        backgroundColor: COLORS.BG_MAIN,
    },
    title: {
        paddingHorizontal: perfectSize(10),
        marginBottom: perfectSize(18),
        color: COLORS.FONT_MAIN,
        fontFamily: FONTS.MEDIUM,
        fontSize: perfectSize(26),
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bus: {
        height: perfectSize(47),
        width: perfectSize(228),
        justifyContent: 'center',
        paddingHorizontal: perfectSize(10),
        backgroundColor: COLORS.MAIN,
        borderTopRightRadius: perfectSize(16),
        borderBottomRightRadius: perfectSize(16),
    },
    name: {
        marginBottom: perfectSize(-7),
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: perfectSize(18),
    },
    route: {
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        fontSize: perfectSize(9),
    },
    seats_info: {
        height: perfectSize(51),
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingRight: perfectSize(10),
    },
    seat_info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    seat_info_title: {
        marginRight: perfectSize(5),
        color: COLORS.FONT_MAIN,
        fontFamily: FONTS.LIGHT,
        fontSize: perfectSize(12),
    },
    seat_info_indicator: {
        height: perfectSize(23),
        width: perfectSize(23),
        borderRadius: perfectSize(5),
        backgroundColor: COLORS.WHITE,
    },
    seat_info_indicator_disabled: {
        height: perfectSize(23),
        width: perfectSize(23),
        borderRadius: perfectSize(5),
        backgroundColor: COLORS.SEAT_DISABLED,
    },
    speed_info: {
        height: perfectSize(51),
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: perfectSize(10),
    },
    speed_value: {
        marginTop: perfectSize(3),
        marginLeft: perfectSize(7),
        color: COLORS.FONT_MAIN,
        fontFamily: FONTS.REGULAR,
        fontSize: perfectSize(14),
    },
})
