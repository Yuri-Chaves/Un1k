import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { OptionButton } from './src/components/OptionButton';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <OptionButton
          source={require('./assets/iconToDo.png')}
          onPress={() => console.log('a')}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={['2%', '35%']}
        >
          <OptionButton
            source={require('./assets/iconCalendar.png')}
            onPress={() => console.log('a')}
          />
        </BottomSheet>
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
