import { ReactNode, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../helpers/Colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

interface BottomSheetInterface {
    children: ReactNode
}

export function BottomSheetComponent({ children }: BottomSheetInterface) {
    const bottomSheetRef = useRef<BottomSheet>(null);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheet
                ref={bottomSheetRef}
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