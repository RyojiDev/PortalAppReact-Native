import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import NewUser from './pages/NewUser';

const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="NewUser" component={NewUser} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default routes;