import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomTextInput from '../components/CustomTextInput';

function LoginPage() {

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ width: "100%", backgroundColor: "white", paddingHorizontal: 20 }}>
                <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 300, height: 300, justifyContent: "center", alignItems: "center" }}>
                        <Image
                            source={{ uri: "https://iili.io/dko7cKu.png" }}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </View>
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
                    <Text style={{ fontSize: 16 }}>Please sign in to continue</Text>
                </View>
                <View style={{ marginTop: 20, gap: 16 }}>
                    <CustomTextInput placeholder='Username' />
                    <CustomTextInput placeholder='Password' secureTextEntry={true} />
                </View>
                <View style={{ marginTop: 40 }}>

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