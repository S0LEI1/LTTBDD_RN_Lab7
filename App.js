import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './src/screen/LandingPage';
import HomePage from './src/screen/HomePage';
import AddJob from './src/screen/AddJob';
import UpdateJob from './src/screen/UpdateJob';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Landing' component={LandingPage} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='AddJob' component={AddJob} />
        <Stack.Screen name='UpdateJob' component={UpdateJob} />
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
