/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import BillList from './views/BillList';
import Bill from './views/Bill';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor="purple" />
        <Stack.Navigator
          initialRouteName="BillList"
          screenOptions={{
            headerStyle: {backgroundColor: 'purple'},
            headerTitleStyle: {color: '#ffff'},
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="BillList"
            component={BillList}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Bill" component={Bill} />
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default App;
