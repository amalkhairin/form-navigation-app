import React from 'react'
import { Text, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const CustomCircleContainer = (props, key) => {
    return (
        <View key={key} style={{ gap: 5, alignItems: "center", flexShrink: 0 }}>
            <View style={{ width: props.size, height: props.size, borderRadius: 200, backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', justifyContent: "center", alignItems: "center", ...props.style }}>
                <MaterialCommunityIcons name={props.item.icon} size={50/2} color={props.iconColor} />
            </View>
            <Text style={{ fontSize: 11, fontWeight: "medium", ...props.labelStyle }}>{props.item.name}</Text>
        </View>
    )
}

export default CustomCircleContainer
