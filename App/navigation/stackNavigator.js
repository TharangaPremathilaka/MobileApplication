import React from 'react';
//import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Welcome from '../screens/welcome';
import Login from '../screens/login';
import Signup from '../screens/signup';
import TabNavigator from '../screens/tabNavigator';
import Home from '../screens/home';
import ProductClothsDetails from '../screens/productClothsDetails';
import ProductStollerDetails from '../screens/productStollerDetails';
import ProductToyDetails from '../screens/productToyDetails';
import ProductOtherDetails from '../screens/productOtherDetails';
import BagModal from '../components/bagModal';
import Payment from '../screens/payment';
import Profile from '../screens/profile';
import Settings from '../screens/settings';
//import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0B020C',
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 24,
            fontFamily: 'roboto',
          },
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProductClothsDetails"
          component={ProductClothsDetails}
        />
        <Stack.Screen
          name="ProductStollerDetails"
          component={ProductStollerDetails}
        />
        <Stack.Screen name="ProductToyDetails" component={ProductToyDetails} />
        <Stack.Screen
          name="ProductOtherDetails"
          component={ProductOtherDetails}
        />
        <Stack.Screen name="BagModal" component={BagModal} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
