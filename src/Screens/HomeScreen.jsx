import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';
import Tags from '../Components/Tags';
import ProductCard from '../Components/ProductCard';
import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';
import sale from '../assets/sale2.jpeg';

const HomeScreen = () => {
  const [products, setProducts] = useState(data.products);
  const navigation = useNavigation();
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

  return (
    <LinearGradient
      colors={['#e3e3e3ff', '#c3adb1ff']}
      style={styles.container}>
      <Header />

      {/* <Tags /> */}

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
              <View style={{marginTop: 5, marginBottom: 0, justifyContent: 'flex-start'}}>
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
      <View>
        {/* <Text>HomeScreen</Text>
        <Text>HomeScreen</Text> */}
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    marginBottom: 60,
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
