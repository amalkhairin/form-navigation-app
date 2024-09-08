import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Pressable, Text, View } from 'react-native';

const CustomIcon = (props) => {
    return (
        <Pressable onPress={props.onPress} style={{ ...props.style }}>
            <View style={{ position: "relative" }}>
                <MaterialCommunityIcons name={props.name} size={props.size} color={props.color || 'black'} />
                {props.badge && <View style={{ position: "absolute", top: 1, right: -1, width: 14, height: 14, borderRadius: 200, justifyContent: "center", alignItems: "center", backgroundColor: "#E72929" }}>
                    <Text numberOfLines={1} style={{ color: 'white', textAlign: "center", fontSize: 8, fontWeight: "bold" }}>{props.badge}</Text>
                </View>}
            </View>
        </Pressable>
    )
}

export default CustomIcon
