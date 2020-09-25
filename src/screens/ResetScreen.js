import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';



const ResetScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />          
            <Spacer>
                <Button title="Reset Password" />
            </Spacer>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Spacer>
                    <Text style={styles.link}>
                        Go back to sign in page
                        </Text>
                </Spacer>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Help')}>
                <Spacer>
                    <Text style={styles.link}>
                        Need help?
                        </Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    link: {
        color: 'blue'
    }
});

export default ResetScreen;