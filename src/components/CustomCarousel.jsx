import React from 'react'
import { Image, View } from 'react-native'
import PagerView from 'react-native-pager-view'

const CustomCarousel = ({items, renderItem, ...props}) => {
    return (
        <PagerView initialPage={0} style={{ flex: 1, height: props.height }} collapsable={true}>
            {items.map((item, index) => (
                <View key={index}>
                    {renderItem({ item })}
                </View>
            ))}
        </PagerView>
    )
}

export default CustomCarousel
