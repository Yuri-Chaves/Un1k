import React, { ReactNode, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../helpers/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface BottomSheetInterface {
    children: ReactNode
}

export const BottomSheetComponent = React.forwardRef<BottomSheetMethods, BottomSheetInterface>(
    (
        { children }: BottomSheetInterface,
        ref: React.ForwardedRef<BottomSheetMethods>
    ): JSX.Element =>{
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <BottomSheet
                    ref={ref}
                    index={0}
                    snapPoints={[24, '35%']}
                    handleStyle={{ backgroundColor: Colors.secondary, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
                    handleIndicatorStyle={{ backgroundColor: Colors.white, width: '35%' }}
                >
                    <View style={styles.bottomContainer}>
                        {children}
                    </View>
                </BottomSheet>
            </GestureHandlerRootView>
        )
    }
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        backgroundColor: Colors.alt1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});