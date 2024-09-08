import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { RefreshControl, useWindowDimensions, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useDispatch, useSelector } from 'react-redux';
import CustomIcon from '../../assets/CustomIcon';
import CustomAppBar from '../components/CustomAppBar';
import CustomProductContainer from '../components/CustomProductContainer';
import CustomSearchBar from '../components/CustomSearchBar';
import { toggleFavorite } from '../redux/favoritesSlice';


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


function ProductPage() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const onRefresh = () => {
    console.log("App: on refresh");
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const handleProductClick = (item) => {
    console.log("App: product click", item.id);
    navigation.navigate("ProductDetail", { item });
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id)); // Dispatch the toggleFavorite action
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", gap: 20 }}>
      <CustomAppBar
        style={{ paddingTop: 14 }}
        left={
          <CustomSearchBar style={{ marginRight: 24 }} placeholder="Cari item berkualitas" />
        }
        right={
          <View style={{ flexDirection: "row", gap: 8 }}>
            <CustomIcon name="bell-outline" size={24} onPress={() => { console.log("hello") }} />
            <CustomIcon name="cart-outline" size={24} badge={10} onPress={() => { console.log("cart") }} />
          </View>
        }
      />
      <View style={{ gap: 20, flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatGrid
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            data={products}
            style={{ flex: 1 }}
            spacing={20}
            showsVerticalScrollIndicator={false}
            itemDimension={width / 3}
            renderItem={({ item }) => (
              <CustomProductContainer
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                liked={favorites.includes(item.id)} // Check if product ID is in favorites array
                onPress={() => handleProductClick(item)}
                onFavoriteToggle={() => handleToggleFavorite(item.id)} // Add the toggle favorite handler
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default ProductPage;
