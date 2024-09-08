import React from 'react';
import { Image, Pressable, Text, ToastAndroid, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomIcon from '../../assets/CustomIcon';
import { toggleFavorite } from '../redux/favoritesSlice';

const CustomProductContainer = (props) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const liked = favorites.includes(props.id); // Check if the product ID is in the favorites array

    const handleLiked = () => {
        dispatch(toggleFavorite(props.id)); // Toggle favorite status using the product ID
        ToastAndroid.show(liked ? "Removed from favorites" : "Added to favorites", ToastAndroid.SHORT);
    };

    return (
        <Pressable style={{ marginTop: 10 }} onPress={props.onPress}>
            <View style={{ gap: 10 }}>
                <Image source={props.image} style={{ height: 200, width: 'auto', borderRadius: 14, objectFit: "cover" }} />
                <View>
                    <Text numberOfLines={1} style={{ fontWeight: 'bold' }}>{props.title}</Text>
                    <Text numberOfLines={1} style={{ color: "gray" }}>{props.price}</Text>
                </View>
                <CustomIcon
                    color={liked ? "red" : "black"}
                    onPress={handleLiked}
                    name={liked ? "heart" : "heart-outline"}
                    size={24}
                    style={{ position: "absolute", top: 10, right: 10 }}
                />
            </View>
        </Pressable>
    );
};

export default CustomProductContainer;
