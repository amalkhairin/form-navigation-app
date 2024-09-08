import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/LoginPage';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import RegisterPage from './src/pages/RegisterPage';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ProductDetailPage from './src/pages/ProductDetailPage';

const Stack = createNativeStackNavigator();
const Tabs = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    myOwnColor: '#BADA55',
  },
};

function TabsNavigator() {
  return (
    <Tabs.Navigator
      activeColor='#52467F'
      inactiveColor='grey'
      // shifting={true}
      screenOptions={tabOptions}
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
      }}
    >
      <Tabs.Screen name="Home" options={{ headerShown: false }} component={HomePage} />
      <Tabs.Screen name="Product" options={{ headerShown: false }} component={ProductPage} />
    </Tabs.Navigator>
  );
}

const tabOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let icon = tabIconMap[route.name];
    if (!focused) {
      icon = `${icon}-outline`;
    }
    return <MaterialCommunityIcons name={icon} size={24} color={color} />;
  }
})

const screenOptions = {
  headerShown: false
}

const tabIconMap = {
  Home: 'home-variant',
  Product: 'cube',
}

export default function App() {

  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer>
              <Stack.Navigator screenOptions={screenOptions} initialRouteName='Tabs'>
                <Stack.Screen name="Tabs" component={TabsNavigator} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="ProductDetail" component={ProductDetailPage} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
