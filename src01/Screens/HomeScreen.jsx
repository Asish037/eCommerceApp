import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
<<<<<<< HEAD
  Alert,
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';
import sale from '../assets/sale2.jpeg';
import { COLORS } from '../Constant/Colors';
<<<<<<< HEAD
// import { useTheme } from '../Context/ThemeContext';
import axios from '../Components/axios';
import qs from 'qs';
import GeneralLoader from '../Components/GeneralLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
  // const [products, setProducts] = useState(data.products);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [isLoading
  // const {getThemeColors} = useTheme();
  // const themeColors = getThemeColors();

  let productList = {
    method: 'GET',
    url: 'product-list',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: qs.stringify({}),
  };

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios(productList);
      const product = response.data.data.map((item)=>{
        return {
          id: item.id,
          title: item.name,
          price: item.price,
          offer_price: item.offer_price,
          description: item.description,
          image: item.img,

          // rating: {rate: 0 , count: 0},
          isFavorite: false,
        };
      });
      setProducts(product);

      console.log('Products fetched:', response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const normalizeWishlistItems = (wishlistItems = []) => {
    return wishlistItems.map(prod => ({
      id: prod.wishlist_id,
      productId: prod.productId,
      title: prod.product_name,
      image: prod.product_image,
      price: prod.product_offer_price || prod.product_price,
      description: prod.product_description,
      sku: prod.product_sku,
      isFavorite: true, // since it's from wishlist
    }));
  };

    const fetchAddLikeProducts = async (userId, productId) => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      const config = {
        method: 'post',
        url: `/add-wishlist`,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        data: { userId, productId },  
      };

      const response = await axios(config);

      if (response.data?.data?.wishlist_items) {
        const items = normalizeWishlistItems(response.data.data.wishlist_items);
        setProducts(items);
        setFilteredProducts(items);
      }

    } catch (error) {
      console.error('Error in fetchAddLikeProducts:', error);
=======
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
 

  const apiUrl = 'https://ecom.kussoft.net/api/product-list';
  const fetchProductItem = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(apiUrl);
      setProducts(response.data.data);
      console.log('Product Details:', response.data);     
      // Handle the response as needed
    } catch (error) {
      console.error('Error fetching product details:', error);
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    } finally {
      setIsLoading(false);
    }
  };

<<<<<<< HEAD

  const handleProductDetails = item => {
    // HomeScreen
    navigation.navigate('PRODUCT_DETAILS', { productId: item.id });
  };
  
=======
  useEffect(()=>{
    fetchProductItem();
  },[])

  const handleProductDetails = item => {
    navigation.navigate('PRODUCT_DETAILS', {item});
  };


>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  const toggleFavorite = item => {
    setProducts(
      products.map(prod => {
        if (prod.id === item.id) {
          console.log('prod: ', prod);
          return {
            ...prod,
            isFavorite: !prod.isFavorite,
          };
        }
        return prod;
      }),
    );
  };

  if (isLoading) {
    return (
<<<<<<< HEAD
      <GeneralLoader 
        message="Loading products..." 
        containerStyle={{ backgroundColor: COLORS.gradient[0] }}
        textColor={COLORS.black}
      />
=======
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
    );
  }

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <Header />

<<<<<<< HEAD
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        ListHeaderComponent={
          <>
            <ImageBackground source={sale} style={styles.ImageBackground}>
              <View style={styles.textContainer}>
                <Text style={styles.headerTitleMain}>Limited Time</Text>
                <Text style={styles.headerTitleSub}>OFFER</Text>
              </View>
            </ImageBackground>

            <View style={styles.tagsContainer}>
              <Tags />
            </View>
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({item}) => (
=======
      {/* <Tags /> */}
      {/* <Text style={styles.featuredProductsTitle}>Featured Products</Text> */}
      <FlatList
        ListHeaderComponent={
          <>
            <>
              <ImageBackground source={sale} style={styles.ImageBackground}>
                <View style={styles.textContainer}>
                  <Text style={styles.headerTitleMain}>Limited Time</Text>
                  <Text style={styles.headerTitleSub}>OFFER</Text>
                </View>
              </ImageBackground>

              {/* <Header /> */}
              <View
                style={{
                  marginTop: 5,
                  marginBottom: 0,
                  justifyContent: 'flex-start',
                }}>
                {/* <Text style={styles.headingText}>Match Your Style</Text> */}
                {/* <View style={styles.inputContainer}>
                  <Image
                    source={require('../assets/search.png')}
                    style={styles.searchIcon}
                  />
                  <TextInput placeholder="Search" style={styles.textInput} />
                </View> */}
                <Tags />
              </View>
            </>
          </>
        }
        
        data={products}
        
        numColumns={2}
        renderItem={({item}) => (
          
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
<<<<<<< HEAD
=======

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    flex: 1,
    width: '100%',
    height: '100%',
  },
  ImageBackground: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
=======
    // flex: 1,
    padding: 10,
    marginBottom: 16,
  },
  ImageBackground: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 20,
    paddingLeft: 20,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
<<<<<<< HEAD
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginBottom: 0,
    alignItems: 'center',
  },
=======
    backgroundColor: 'transparent', // Semi-transparent black background
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 0,
    alignItems: 'flex-start',
  },

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  headerTitleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitleSub: {
    fontSize: 32,
    fontWeight: 'bold',
<<<<<<< HEAD
    color: '#972525ff',
=======
    color: '#972525ff', // A standout color like gold
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
<<<<<<< HEAD
  flatList: {
    flex: 1,
    width: '100%',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  tagsContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
});
export default HomeScreen;
