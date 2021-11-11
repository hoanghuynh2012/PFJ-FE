import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bootsplash from '../screens/Bootsplash/index';
import BottomTab from './bottomtab';
import ProductDetail from '../screens/ProductDetail/index';
import EditProfile from '../screens/EditProfile/index';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bootsplash" component={Bootsplash} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
