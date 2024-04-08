import { StyleSheet } from 'react-native'

import { perfectSize } from '../../../../../helpers/dimensions'

import COLORS from '../../../../../theme/Colors'
import FONTS from '../../../../../theme/Fonts'

export default StyleSheet.create({
    container: {
        height: perfectSize(47),
        width: perfectSize(47),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: perfectSize(8),
    },
    name: {
        marginTop: perfectSize(3),
        color: COLORS.BLACK,
        fontFamily: FONTS.REGULAR,
        fontSize: perfectSize(19),
    },
})
