import * as React from 'react';
import LoginPage from '../Views/Login/LoginPage';
import RepoList from '../Views/Repo/RepoList';
import RepoDetailsComponent from '../Views/Repo/RepoDetailsComponent';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: 'red' }} initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login', headerShown: false }} />
        <Stack.Screen name="RepoList" component={RepoList} options={{ title: 'Repo List' }} />
        <Stack.Screen name="RepoDetailsComponent" component={RepoDetailsComponent} options={{ title: 'Repo Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;