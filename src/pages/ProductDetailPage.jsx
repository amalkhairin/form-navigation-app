import React from 'react'
import { Image, ScrollView, Text, ToastAndroid, useWindowDimensions, View } from 'react-native'
import CustomAppBar from '../components/CustomAppBar'
import CustomSearchBar from '../components/CustomSearchBar'
import CustomIcon from '../../assets/CustomIcon'
import { useNavigation } from '@react-navigation/native'
import CustomCarousel from '../components/CustomCarousel'
import SlideImage1 from '../../assets/img/slide1.png'
import SlideImage2 from '../../assets/img/slide2.png'
import SlideImage3 from '../../assets/img/slide3.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../redux/favoritesSlice'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper'

const ProductDetailPage = (props) => {

  const product = props.route.params.item

  console.log(product);


  const navigation = useNavigation()
  const { width, height } = useWindowDimensions()

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const liked = favorites.includes(product.id); // Check if the product ID is in the favorites array

  const handleLiked = () => {
    dispatch(toggleFavorite(product.id)); // Toggle favorite status using the product ID
    ToastAndroid.show(liked ? "Removed from favorites" : "Added to favorites", ToastAndroid.SHORT);
  };

  const handleBack = () => {
    console.log("hello")
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", gap: 20 }}>
      <CustomAppBar
        style={{ paddingTop: 14 }}
        left={
          <CustomIcon name="arrow-left" size={24} onPress={handleBack} />
        }
        right={
          <View style={{ flexDirection: "row", gap: 8 }}>
            <CustomIcon name="bell-outline" size={24} onPress={() => { console.log("hello") }} />
            <CustomIcon name="cart-outline" size={24} badge={10} onPress={() => { console.log("cart") }} />
          </View>
        }
      />

      <ScrollView>
        <CustomCarousel
          height={height / 2}
          items={[
            product.image
          ]}
          renderItem={({ item }) => (
            <View key={1} style={{ height: "100%", width: "auto", backgroundColor: 'lightgray', borderRadius: 20, marginHorizontal: 24 }}>
              <Image source={item} style={{ height: '100%', width: '100%', borderRadius: 20 }} />
            </View>
          )}
        />
        <View style={{ paddingHorizontal: 24, gap: 10, marginTop: 14 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.title}</Text>
            <CustomIcon
              color={liked ? "red" : "black"}
              onPress={handleLiked}
              name={liked ? "heart" : "heart-outline"}
              size={24}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4, justifyContent: 'space-between', }}>
            <View style={{ borderWidth: 1, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 8, flexDirection: "row", alignItems: "center", gap: 4, borderColor: "lightgray" }}>
              <CustomIcon name="star" size={14} color="#FFB93F" />
              <Text style={{ fontWeight: 'bold', fontSize: 10, }}>{product.overallRating}</Text>
            </View>
          </View>
          <View style={{}}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.price}</Text>
          </View>
          <View style={{}}>
            <Text style={{ fontWeight: 'bold' }}>Description</Text>
            <Text style={{ color: "gray" }}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={{ height: 100, width: "100%", flex: 1, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 24 }}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <Button
            buttonColor='#52467F'
            labelStyle={{ color: "white", fontSize: 16, paddingVertical: 8 }}
            mode="contained"
            onPress={() => { console.log("hello") }}
          >
            Checkout
          </Button>
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Button
            labelStyle={{ color: "#52467F", fontSize: 16, paddingVertical: 8 }}
            mode="outlined"
            onPress={() => { console.log("hello") }}
          >
            Add to Cart
          </Button>
        </View>
      </View>
    </View>
  )
}

export default ProductDetailPage
