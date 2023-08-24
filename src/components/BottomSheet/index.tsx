import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../helpers/Colors';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface BottomSheetInterface {
    children: ReactNode
}

export const BottomSheetComponent = React.forwardRef<BottomSheetMethods, BottomSheetInterface>(
    (
        { children }: BottomSheetInterface,
        ref: React.ForwardedRef<BottomSheetMethods>
    ): JSX.Element => {
        return (
            <BottomSheet
                ref={ref}
                index={0}
                style={{ width: '100%' }}
                snapPoints={[24, '35%']}
                handleStyle={{ backgroundColor: Colors.secondary, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
                handleIndicatorStyle={{ backgroundColor: Colors.white, width: '35%' }}
            >
                <View style={styles.bottomContainer}>
                    {children}
                </View>
            </BottomSheet>
        )
    }
)
const styles = StyleSheet.create({
    bottomContainer: {
        backgroundColor: Colors.alt1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});