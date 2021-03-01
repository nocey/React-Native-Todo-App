import React, { useEffect } from 'react';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Todo from './components/Todo/Todo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SharedTodo from './components/SharedTodo/SharedTodo';

const Tab = createBottomTabNavigator();

const SettingsStack = createStackNavigator();

const TodoTabs =()=>{
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Todo} />
    </SettingsStack.Navigator>
  );
}

const HomeTabs =()=>{
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Home" component={Home} />
      <SettingsStack.Screen name="SharedTodo" component={SharedTodo} />
    </SettingsStack.Navigator>
  );
}

const ProfileTabs =()=>{
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
}


export default function MyTabs() {
  useEffect(() => {
    return () => {
    }
  }, [])
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



