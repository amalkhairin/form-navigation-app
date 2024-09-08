import React, { useState } from 'react'
import { Controller, useController } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function CustomTextInput({ control, name, rules, error, ...other }) {
    const [inputValue, setInputValue] = useState('');

    const handleOnChangeValue = (value) => {
        setInputValue(value)
    }
    // const {
    //     field,
    //     fieldState: { invalid, isTouched, isDirty },
    //     formState: { touchedFields, dirtyFields }
    // } = useController({ name, control, rules });

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={""}
            // rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
                <>
                    <View style={{ ...styles.input }}>
                        <TextInput
                            cursorColor={"black"}
                            {...other}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    </View>

                    {error && <Text style={{ color: "red" }}>{error.message}</Text>}
                </>
            )}
        />
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
