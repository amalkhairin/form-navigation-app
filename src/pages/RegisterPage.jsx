import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import LoginIcon from '../../assets/LoginIcon';
import CustomTextInput from '../components/CustomTextInput';
import { Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function RegisterPage() {

    const { height, width } = useWindowDimensions()

    const [checked, setChecked] = useState(false);

    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", backgroundColor: "white", paddingHorizontal: 20, marginTop: 20 }}>
                <View style={{}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Register</Text>
                    <Text style={{ fontSize: 16 }}>Please register to continue</Text>
                </View>
                <View style={{ marginTop: 20, gap: 16 }}>
                    <CustomTextInput placeholder='Username' />
                    <CustomTextInput placeholder='Password' secureTextEntry={true} />
                </View>
                <View style={{flexDirection: 'row', alignItems: "center", marginTop: 20}}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text>Remember me</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button buttonColor='#52467F' labelStyle={{ color: "white", fontSize: 16, paddingVertical: 8 }} mode="contained" onPress={() => navigation.navigate('Login')}>
                        Register
                    </Button>
                </View>
                <View style={{justifyContent: "center", alignItems: "center", marginTop: 10}}>
                    <Text>Already have an account?
                        <Text style={{ color: "#52467F" }} onPress={() => navigation.navigate('Login')}> Login</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#52467F"
    },
});

export default RegisterPage