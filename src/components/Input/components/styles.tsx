import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from "../../../utils/scanling";

export const styles = StyleSheet.create({
    userInputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: widthPixel(10),
        height: heightPixel(48),
        borderWidth: widthPixel(1),
        padding: 0,
    },
    input: {
        lineHeight: Platform.OS === 'ios' ? null : undefined,
        padding: 0,
        flex: 1,
        height: '100%',
        marginHorizontal: pixelSizeHorizontal(14),
        fontSize: fontPixel(14),
        color: COLORS.placeholderColor
    },
    errorMessage: {
        color: COLORS.red,
        fontSize: fontPixel(12),
        lineHeight: heightPixel(18),
        marginBottom: 16,
        marginTop: 8,
    },
})