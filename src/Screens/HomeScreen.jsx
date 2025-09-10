import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
<<<<<<< HEAD
import React, {useState, useEffect, useContext} from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import sale from '../assets/sale2.jpeg';
import backgroundSlider from '../assets/backgroundSlider.png';
import { COLORS } from '../Constant/Colors';
// import { useTheme } from '../Context/ThemeContext';
import { CartContext } from '../Context/CartContext';
import axios from '../Components/axios';
import qs from 'qs';
import AppLoader from '../Components/AppLoader';
import AsyncStorage from '@react-native-async-storage/async-storage';
=======
// import sale from '../assets/sale2.jpeg';
import download from '../assets/download.jpeg';
import { COLORS } from '../Constant/Colors';
// import { useTheme } from '../Context/ThemeContext';
import axios from '../Components/axios';
import qs from 'qs';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

const HomeScreen = () => {
  // const [products, setProducts] = useState(data.products);
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  // const {getThemeColors} = useTheme();
  // const themeColors = getThemeColors();
    // const { userData } = useContext(CartContext);
    const {user, token} = useContext(CartContext);
    const { wishlist, isFavorite, addToWishlist, removeFromWishlist } = useContext(CartContext);
=======
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  // const {getThemeColors} = useTheme();
  // const themeColors = getThemeColors();

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  let productList = {
    method: 'GET',
    url: 'product-list',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: qs.stringify({}),
<<<<<<< HEAD
=======
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


  const handleProductDetails = item => {
    // HomeScreen
    navigation.navigate('PRODUCT_DETAILS', { productId: item.id });
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
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
          isFavorite: isFavorite(item.id),
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

<<<<<<< HEAD
 
  useEffect(() => {
    fetchProducts();
  }, [wishlist]);

  /** Add product to wishlist */
  const fetchAddLikeProducts = async (productId) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.log('No token found');
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      if (!user?.id) {
        Alert.alert('Error', 'User not found. Please log in again.');
        return;
      }

      const payload = {
        userId: String(user.id),           
        productIds: [String(productId)],       
      };

      const response = await axios({
        method: 'post',
        url: '/add-wishlist',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: payload,
      });

      console.log('Wishlist Add Response:', response.data);
    } catch (error) {
      console.error('Error in fetchAddLikeProducts:', error.response?.data || error.message);
    }
  };


  /** Remove product from wishlist */
  const fetchRemoveLikeProducts = async (userId, productId) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      const payload = {
        userId: String(userId),
        productId: String(productId),
      };

      const response = await axios({
        method: 'delete',
        url: `/remove-wishlist?userId=${userId}&productId=${productId}`, 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: payload,
      });

      console.log('Wishlist Remove Response:', response.data);
    } catch (error) {
      console.error('Error in fetchRemoveLikeProducts:', error.response?.data || error.message);
    }
  };


  /** Navigate to product details */
  const handleProductDetails = (item) => {
    navigation.navigate('PRODUCT_DETAILS', { productId: item.id });
  };

  /** Toggle favorite (with API call) */
  const toggleFavorite = async (item) => {
    try {
      if (!user?.id) {
        Alert.alert('Error', 'User not found. Please log in again.');
        return;
      }

      if (item.isFavorite) {
        await fetchRemoveLikeProducts(user.id, item.id);
        removeFromWishlist(item.productId);
      } else {
        await fetchAddLikeProducts(item.id);
        addToWishlist({ productId: item.id });
      }

      // update local state
      setProducts((prev) =>
        prev.map((prod) =>
          prod.id === item.id ? { ...prod, isFavorite: !prod.isFavorite } : prod
        )
      );
    } catch (err) {
      console.error('Error toggling favorite:', err);
    }
  };
 
  if (isLoading) {
    return <AppLoader message="Loading products..." />;
=======
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: COLORS.black}}>Loading products...</Text>
      </View>
    );
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  }

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <Header />

<<<<<<< HEAD
=======
      {/* <Text style={styles.headingText}>Trending</Text> */}

>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        ListHeaderComponent={
          <>
<<<<<<< HEAD
            <ImageBackground 
              source={backgroundSlider} 
              style={styles.ImageBackground}
              resizeMode="contain"
            >
=======
            <ImageBackground source={download} style={styles.ImageBackground}>
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
              {/* <View style={styles.textContainer}>
                <Text style={styles.headerTitleMain}>Limited Time</Text>
                <Text style={styles.headerTitleSub}>OFFER</Text>
              </View> */}
            </ImageBackground>

            <View style={styles.tagsContainer}>
              <Tags />
            </View>
          </>
        }
        data={products}
        numColumns={2}
        renderItem={({item}) => (
          <ProductCard
            item={item}
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
<<<<<<< HEAD

=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  ImageBackground: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
<<<<<<< HEAD
    // marginTop: 1,
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  },
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    marginBottom: 0,
    alignItems: 'center',
  },
  headerTitleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitleSub: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#972525ff',
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
});
export default HomeScreen;
