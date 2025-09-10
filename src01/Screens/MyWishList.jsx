import {
<<<<<<< HEAD
  Alert,
=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import Tags from '../Components/Tags';
import WishlistCard from '../Components/WishlistCard';
import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import { COLORS } from '../Constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import axios from  '../Components/axios';
import qs from 'qs';

const MyWishList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const [like, setLike] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadWishlist = async () => {
      const userId = await AsyncStorage.getItem('userId');
      console.log(" Loaded userId from AsyncStorage:", userId);
      if (userId) {
        fetchLikeProducts(userId);
      } else {
        console.log(" No userId found in AsyncStorage");
      }
    };
    loadWishlist();
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

  const fetchLikeProducts = async (userId) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        console.log('No token found');
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      const config = {
        method: 'get',
        url: `/get-wishlist?userId=${userId}`,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };

      const response = await axios(config);

      if (response.data?.data?.wishlist_items) {
        const items = normalizeWishlistItems(response.data.data.wishlist_items);
        setProducts(items);
        setFilteredProducts(items);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }

    } catch (error) {
      console.error('Error in fetchLikeProducts:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAddLikeProducts = async (userId, productId) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (item) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId'); 
      if (!token || !userId) {
        console.log('No token or userId found');
        Alert.alert('Error', 'No auth token found. Please log in again.');
        return;
      }

      const config = {
        method: 'delete',
        url: `/remove-wishlist?userId=${userId}&productId=${item.productId}`,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        data: {userId, productId: item.productId},
      };

      const response = await axios(config);

      if (response.data?.data?.wishlist_items) {
        // backend returns updated wishlist
        const items = normalizeWishlistItems(response.data.data.wishlist_items);
        setProducts(items);
        setFilteredProducts(items);
      } else {
        // fallback: remove locally
        setProducts(prev => prev.filter(prod => prod.id !== item.id));
        setFilteredProducts(prev => prev.filter(prod => prod.id !== item.id));
      }

    } catch (error) {
      console.error('Error in removeFromWishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductDetails = item => {
    console.log('hello==' + JSON.stringify(item));
    navigation.navigate('PRODUCT_DETAILS', { productId: item.id });
=======
import {COLORS} from '../Constant/Colors';

const MyWishList = () => {
  const [products, setProducts] = useState(data.products);
  const [filteredProducts, setFilteredProducts] = useState(data.products);
  const navigation = useNavigation();

  const handleProductDetails = item => {
    console.log('hello==' + JSON.stringify(item));
    navigation.navigate('PRODUCT_DETAILS', {item});
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  };

  const handleSearchChange = searchText => {
    if (searchText.trim() === '') {
      setFilteredProducts(products);
    } else {
<<<<<<< HEAD
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
=======
      const filtered = products.filter(
        product =>
          product.name.toLowerCase().includes(searchText.toLowerCase()) ||
          product.category?.toLowerCase().includes(searchText.toLowerCase()),
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      );
      setFilteredProducts(filtered);
    }
  };

<<<<<<< HEAD
  const toggleFavorite = async (item) => {
    try {
      const userId = await AsyncStorage.getItem('userId'); // make sure you save this in AsyncStorage
      if (!userId) return;

      if (item.isFavorite) {
        // already in wishlist → remove it
        removeFromWishlist(item);
      } else {
        // not in wishlist → add it
        fetchAddLikeProducts(userId, item.productId);
      }
    } catch (error) {
      console.error('Error in toggleFavorite:', error);
    }
  };

  // const removeFromWishlist = async (item) => {
  //   const userId = await AsyncStorage.getItem('userId'); // adjust if you store it differently
  //   if (!userId) return;

  //   fetchRemoveProducts(item, userId);
  // };
=======
  const wishList = [
    {
      item_id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      brand: 'Sony',
      price: 150.0,
      currency: 'USD',
      link: 'https://example.com/product/wireless-headphones',
      priority: 'High',
      notes: 'Looking for noise-cancelling features.',
    },
    {
      item_id: 2,
      name: 'Coffee Maker',
      category: 'Home Appliances',
      brand: 'Keurig',
      price: 99.99,
      currency: 'USD',
      link: 'https://example.com/product/coffee-maker',
      priority: 'Medium',
      notes: 'Prefer single-serve pod machine.',
    },
    {
      item_id: 3,
      name: 'Laptop Bag',
      category: 'Accessories',
      brand: 'Targus',
      price: 45.0,
      currency: 'USD',
      link: 'https://example.com/product/laptop-bag',
      priority: 'Low',
      notes: 'Looking for something lightweight and durable.',
    },
  ];

  const toggleFavorite = item => {
    const updatedProducts = products.map(prod => {
      if (prod.id === item.id) {
        console.log('prod: ', prod);
        return {
          ...prod,
          isFavorite: !prod.isFavorite,
        };
      }
      return prod;
    });
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const removeFromWishlist = item => {
    const updatedProducts = products.filter(prod => prod.id !== item.id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      {/* header */}
      <Header onSearchChange={handleSearchChange} />

      {/* <Tags /> */}

      <FlatList
        data={filteredProducts}
        numColumns={2}
<<<<<<< HEAD
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <WishlistCard
            item={item}

=======
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <WishlistCard
            item={item}
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
            handleProductClick={handleProductDetails}
            toggleFavorite={toggleFavorite}
            removeFromWishlist={removeFromWishlist}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <View>
        {/* <Text>HomeScreen</Text>
        <Text>HomeScreen</Text> */}
      </View>
    </LinearGradient>
  );
};
export default MyWishList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
<<<<<<< HEAD
    padding: 5,
  },

=======
    padding: 16,
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 5,
  },
  row: {
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
  },
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
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
});
