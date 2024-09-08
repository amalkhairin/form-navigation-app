import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import LoginIcon from '../../assets/LoginIcon';
import CustomTextInput from '../components/CustomTextInput';
import { Button, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

const schema = yup.object().shape({
    username: yup.string().required('Name is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
})

function LoginPage() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema),
    })

    const { height, width } = useWindowDimensions()

    const [checked, setChecked] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        navigation.navigate('Tabs')
    }

    const navigation = useNavigation();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", backgroundColor: "white", paddingHorizontal: 20 }}>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <LoginIcon width={width} height={width} />
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
                    <Text style={{ fontSize: 16 }}>Please login to continue</Text>
                </View>
                <View style={{ marginTop: 20, gap: 16 }}>
                    <CustomTextInput control={control} error={errors.username} rules={{required: true }} name='username' placeholder='Username' />
                    <CustomTextInput control={control} error={errors.password} rules={{required: true }} name='password' placeholder='Password' secureTextEntry={true} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 20 }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text>Remember me</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button buttonColor='#52467F' labelStyle={{ color: "white", fontSize: 16, paddingVertical: 8 }} mode="contained" onPress={handleSubmit(onSubmit)}>
                        Login
                    </Button>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                    <Text>Don't have an account?
                        <Text style={{ color: "#52467F" }} onPress={() => navigation.navigate('Register')}> Register</Text>
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

export default LoginPage