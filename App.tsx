import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from './src/helpers/Colors';

export default function App() {

  return (
      <NavigationContainer>
          <Routes />
          <StatusBar backgroundColor={Colors.secondary} style={'inverted'} translucent={false} />
      </NavigationContainer>
  );
}
