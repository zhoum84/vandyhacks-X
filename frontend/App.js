import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.jsx'
import RecordScreen from './src/screens/RecordScreen.jsx';
import NotesScreen from './src/screens/NotesScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*   screenOptions={{
    headerShown: false
  }}
 */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Record" component={RecordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>  
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
