import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SharedTodo from './components/SharedTodo/SharedTodo';
import Logindex from './components/Login&SignUp/Logindex';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Login from './components/Login&SignUp/Login';
import SignUp from './components/Login&SignUp/SignUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const SettingsStack = createStackNavigator();

const TodoTabs = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Todo} />
    </SettingsStack.Navigator>
  );
}

const HomeTabs = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={Home} />
      <SettingsStack.Screen name="SharedTodo" component={SharedTodo} />
    </SettingsStack.Navigator>
  );
}

const ProfileTabs = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Test" component={Logindex} />
    </SettingsStack.Navigator>
  );
}

const LoginInside = () => {
  return (
      <SettingsStack.Navigator>
        <SettingsStack.Screen name="Logindex" component={Logindex} options={
          {headerShown: false}
        } />
        <SettingsStack.Screen name="Login" component={Login} options={
          {headerShown: false}
        }/>
        <SettingsStack.Screen name="Register" component={SignUp}  options={
          {headerShown: false}
        }/>
      </SettingsStack.Navigator>

  )
}


function MyTabs() {
  const login = useSelector(state => state.Login)
  console.log(login)
  if (login) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator tabBar={() => null}>
            <Tab.Screen name="Login" component={LoginInside} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeTabs} />
          <Tab.Screen name="Todo" component={TodoTabs} />
          <Tab.Screen name="Profile" component={ProfileTabs} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}



export default function App() {
  return (
    <Provider store={store}>
      <MyTabs />
    </Provider>
  )
}
