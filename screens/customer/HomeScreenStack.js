import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import MessDetailsScreen from './MessDetailsScreen'

const Stack = createNativeStackNavigator();
export default function HomeScreenStack() {

  return (

          <Stack.Navigator
            screenOptions={{headerShown:false}}
          >
                <Stack.Screen name = "MessPageScreen" component={MessDetailsScreen} />
                <Stack.Screen name = "CustomerHomeScreen" component={HomeScreen} />
          </Stack.Navigator>
  );
}
