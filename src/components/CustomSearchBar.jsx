import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';

const CustomSearchBar = (props) => {
  return (
    <View style={{ ...styles.input, ...props.style }}>
      <TextInput
        placeholder={props.placeholder}
        cursorColor={"black"}
        onBlur={props.onBlur}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F5F6F7",
    borderRadius: 2000,
    paddingHorizontal: 24,
    paddingVertical: 5,
    flex: 1
  }
});

export default CustomSearchBar
