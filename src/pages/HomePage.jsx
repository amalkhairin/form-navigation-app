import React from 'react'
import { Image, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import CustomIcon from '../../assets/CustomIcon'
import SlideImage1 from '../../assets/img/slide1.png'
import SlideImage2 from '../../assets/img/slide2.png'
import SlideImage3 from '../../assets/img/slide3.png'
import Tshirt from '../../assets/img/tshirt.png'
import CustomAppBar from '../components/CustomAppBar'
import CustomCarousel from '../components/CustomCarousel'
import CustomCircleContainer from '../components/CustomCircleContainer'
import CustomProductContainer from '../components/CustomProductContainer'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const categoryData = [
  {
    id: 1,
    name: 'Electronics',
    icon: 'cellphone',
  },
  {
    id: 2,
    name: 'Fashion',
    icon: 'tshirt-crew',
  },
  {
    id: 3,
    name: 'Groceries',
    icon: 'food',
  },
  {
    id: 4,
    name: 'Furniture',
    icon: 'sofa',
  },
  {
    id: 5,
    name: 'Books',
    icon: 'book-open',
  },
  {
    id: 6,
    name: 'Toys',
    icon: 'puzzle',
  },
];

export const products = [
  {
    id: 1,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Sigma+Male+T-Shirt' },
    title: "Sigma Male T-Shirt",
    price: "Rp 300.000",
    description: "A stylish and comfortable t-shirt perfect for casual outings. Made from 100% cotton with a soft touch.",
    reviews: [
      { user: "Alice", rating: 5, comment: "Love this t-shirt! Very comfortable and fits well." },
      { user: "Bob", rating: 4, comment: "Good quality, but a bit pricey." }
    ],
    overallRating: 4.5, // Calculate average of reviews if needed
    storeName: "Fashion Hub"
  },
  {
    id: 2,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Alpha+Male+Hoodie' },
    title: "Alpha Male Hoodie",
    price: "Rp 450.000",
    description: "A warm and cozy hoodie with a modern design. Ideal for chilly weather and casual wear.",
    reviews: [
      { user: "Charlie", rating: 5, comment: "Perfect hoodie for winter. The material is very soft." },
      { user: "David", rating: 4, comment: "Great hoodie, but the color is a bit different from the photo." }
    ],
    overallRating: 4.5,
    storeName: "Fashion Hub"
  },
  {
    id: 3,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Beta+Male+Jacket' },
    title: "Beta Male Jacket",
    price: "Rp 550.000",
    description: "A durable jacket with a sleek design. Suitable for both casual and semi-formal occasions.",
    reviews: [
      { user: "Eva", rating: 4, comment: "Nice jacket, but the fit is a bit off." },
      { user: "Frank", rating: 5, comment: "High quality and looks great. Very happy with my purchase." }
    ],
    overallRating: 4.5,
    storeName: "Fashion Hub"
  },
  {
    id: 4,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Omega+Male+Cap' },
    title: "Omega Male Cap",
    price: "Rp 150.000",
    description: "A trendy cap with adjustable strap. Perfect accessory for a sunny day.",
    reviews: [
      { user: "Grace", rating: 5, comment: "Great cap, fits well and the color is perfect." },
      { user: "Hank", rating: 3, comment: "The cap is nice, but it feels a bit flimsy." }
    ],
    overallRating: 4.0,
    storeName: "Fashion Hub"
  },
  {
    id: 5,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Gamma+Male+Shoes' },
    title: "Gamma Male Shoes",
    price: "Rp 650.000",
    description: "Comfortable and stylish shoes suitable for everyday wear. Made with high-quality materials.",
    reviews: [
      { user: "Ivy", rating: 5, comment: "These shoes are fantastic! Very comfortable and stylish." },
      { user: "John", rating: 4, comment: "Good shoes, but they took a while to break in." }
    ],
    overallRating: 4.5,
    storeName: "Fashion Hub"
  },
  {
    id: 6,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Delta+Male+Sweater' },
    title: "Delta Male Sweater",
    price: "Rp 400.000",
    description: "A soft and cozy sweater perfect for layering. Great for casual and semi-formal settings.",
    reviews: [
      { user: "Kate", rating: 5, comment: "Love this sweater! It's super soft and warm." },
      { user: "Leo", rating: 4, comment: "Good quality, but I wish it came in more colors." }
    ],
    overallRating: 4.5,
    storeName: "Fashion Hub"
  },
  {
    id: 7,
    image: { uri: 'https://via.placeholder.com/300x400.png?text=Zeta+Male+Socks' },
    title: "Zeta Male Socks",
    price: "Rp 100.000",
    description: "Comfortable and durable socks that are perfect for everyday wear. Available in multiple sizes.",
    reviews: [
      { user: "Mia", rating: 5, comment: "Best socks I've ever worn! Very comfortable and durable." },
      { user: "Nina", rating: 4, comment: "Good socks, but a bit thicker than I expected." }
    ],
    overallRating: 4.5,
    storeName: "Fashion Hub"
  }
];


function HomePage() {

  const { width, height } = useWindowDimensions()
  const favorites = useSelector(state => state.favorites);
  const navigation = useNavigation();

  handleProductClick = (id) => {
    console.log("App: product click", id)
    navigation.navigate("ProductDetail", { id })
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", gap: 20 }}>
      <CustomAppBar
        style={{ paddingTop: 14 }}
        left={
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#52467F" }}>Enigma<Text style={{ color: "#FFB93F" }}>Shop</Text></Text>
          </View>
        }
        right={
          <View style={{ flexDirection: "row", gap: 8 }}>
            <CustomIcon name="bell-outline" size={24} onPress={() => { console.log("hello") }} />
            <CustomIcon name="cart-outline" size={24} badge={10} onPress={() => { console.log("cart") }} />
          </View>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: 20 }}>
          <CustomCarousel
            height={150}
            items={[
              SlideImage1,
              SlideImage2,
              SlideImage3
            ]}
            renderItem={({ item }) => (
              <View key={1} style={{ height: "100%", width: "auto", backgroundColor: 'lightgray', borderRadius: 20, marginHorizontal: 24 }}>
                <Image source={item} style={{ height: '100%', width: '100%', borderRadius: 20 }} />
              </View>
            )}
          />

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 24 }}>
              <Text style={{ fontWeight: 'bold' }}>Shop by Category</Text>
              <Text style={{ color: "#6C63FF" }}>See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10, paddingLeft: 24, flex: 1 }} contentContainerStyle={{ gap: 20, paddingRight: 50 }}>
              {categoryData.map((item, index) => (
                <CustomCircleContainer key={index} item={item} size={50} iconColor="#6C63FF" />
              ))}
            </ScrollView>
          </View>

          <View style={{ paddingHorizontal: 24, }}>
            <Text style={{ fontWeight: 'bold' }}>Recommendations for you</Text>
            <FlatGrid
              data={products}
              scrollEnabled={false}
              style={{ flex: 1 }}
              spacing={10}
              renderItem={({ item }) => (
                <CustomProductContainer
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  liked={favorites.some(fav => fav.id === item.id)}
                  onPress={() => handleProductClick(item.id)}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage
