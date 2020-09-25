import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import Navlink from '../components/Navlink';



const LoginScreen = () => {

    const { state, signin } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign in REEL</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{ state.errorMessage }</Text> : null}
            <Spacer>
                <Button title="Sign In" />
            </Spacer>
            <Navlink
                text="Forget your password? Reset password instead"
                routeName="Reset"
            />
        </View>
    );
};


LoginScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    link: {
        color: 'blue'
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop:15
    }
});

export default LoginScreen;