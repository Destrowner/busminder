import { StyleSheet } from 'react-native'

import { perfectSize } from '../../../../../helpers/dimensions'

import COLORS from '../../../../../theme/Colors'
import FONTS from '../../../../../theme/Fonts'

export default StyleSheet.create({
    container: {
        height: perfectSize(346),
        marginHorizontal: perfectSize(51),
        marginBottom: perfectSize(36),
        borderRadius: perfectSize(20),
        backgroundColor: COLORS.BUS_CARD,
        overflow: 'hidden',
        shadowColor: `${COLORS.BLACK}50`,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7,
    },
    header: {
        height: perfectSize(93),
        justifyContent: 'center',
        backgroundColor: COLORS.MAIN,
    },
    name: {
        textAlign: 'center',
        color: COLORS.WHITE,
        fontFamily: FONTS.MEDIUM,
        fontSize: perfectSize(25),
    },
    route: {
        position: 'absolute',
        bottom: perfectSize(4),
        alignSelf: 'center',
        color: COLORS.WHITE,
        fontFamily: FONTS.REGULAR,
        fontSize: perfectSize(14),
    },
    image_container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    image: {
        alignSelf: 'flex-end',
        marginTop: perfectSize(10),
    },
})
