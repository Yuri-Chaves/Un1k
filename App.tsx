import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from './src/helpers/Colors';
import { DBContextProvider } from './src/contexts/DBContext';

export default function App() {

  return (
    <NavigationContainer>
      <DBContextProvider>
        <Routes />
        <StatusBar backgroundColor={Colors.secondary} style={'inverted'} translucent={false} />
      </DBContextProvider>
    </NavigationContainer>
  );
}
