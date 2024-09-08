import React from 'react'
import CustomIcon from '../../assets/CustomIcon'
import { Text, View } from 'react-native'

const CustomAppBar = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", paddingHorizontal: 24, ...props.style }}>
            {props.left}
            {props.right}
        </View>
    )
}

export default CustomAppBar
