import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';

function CustomTextInput(props) {
    return (
        <View style={{ ...styles.input }}>
            <TextInput {...props} cursorColor={"black"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#F5F6F7",
        borderRadius: 2000,
        paddingHorizontal: 24,
        paddingVertical: 14
    }
});

export default CustomTextInput
