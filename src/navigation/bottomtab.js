import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/index';
import Discount from '../screens/Discount/index';
import Cart from '../screens/Cart/index';
import Profile from '../screens/Profile/index';
import Saved from '../screens/Saved/index';
import {COLOR} from '../assets/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR.GREEN,
        tabBarInactiveTintColor: COLOR.DARK,
        tabBarStyle: {
          height: 60,
          backgroundColor: COLOR.WHITE,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'SFProText-Medium',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discount"
        component={Discount}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="ticket" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="shopping-cart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="heart" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottom;
