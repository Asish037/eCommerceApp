import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(()=>{
    fetchProductItem();
  },[])

  const handleProductDetails = item => {
    navigation.navigate('PRODUCT_DETAILS', {item});
  };


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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={COLORS.gradient} style={styles.container}>
      <Header />

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
  },
  headingText: {
    fontSize: 28,
    color: '#000000',
    marginVertical: 20,
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    backgroundColor: 'transparent', // Semi-transparent black background
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 0,
    alignItems: 'flex-start',
  },

  headerTitleMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTitleSub: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#972525ff', // A standout color like gold
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
export default HomeScreen;
