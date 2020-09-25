import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SpacedScreen from './src/screens/SpacedScreen';
import PracticeScreen from './src/screens/PracticeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ResetScreen from './src/screens/ResetScreen';
import HelpScreen from './src/screens/HelpScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signin: LoginScreen,
        Reset: ResetScreen,
        Help: HelpScreen
    }),
    mainFlow: createBottomTabNavigator({
        Dashboard: DashboardScreen,
        Practice: PracticeScreen,
        SpacedLearing: SpacedScreen,
        Settings: SettingsScreen
    })
});


const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={(navigator) => {
                setNavigator(navigator);
            }}
            />
        </AuthProvider>
    );
};