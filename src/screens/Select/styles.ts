import { StyleSheet } from 'react-native'

import COLORS from '../../theme/Colors'
import FONTS from '../../theme/Fonts'

import { perfectSize } from '../../helpers/dimensions'

export default StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.BG_MAIN,
    },
    header: {
        height: perfectSize(96),
    },
    title: {
        paddingVertical: perfectSize(24),
        textAlign: 'center',
        color: COLORS.FONT_MAIN,
        fontFamily: FONTS.MEDIUM,
        fontSize: perfectSize(26),
    },
})
