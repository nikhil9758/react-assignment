import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FirebaseContext from './Context/FirebaseContext';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import MovieScreen from './Screens/MovieScreen';

const Stack = createStackNavigator();
const App= () => {
  return (
    <FirebaseContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* Add more screens as needed */}
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Movie" component={MovieScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseContext>
  );
};

export default App;
