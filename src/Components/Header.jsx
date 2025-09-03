import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Animated,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {fonts} from '../utils/fonts';
import {useNavigation, useRoute} from '@react-navigation/native';
import {addToCart} from '../utils/helper';
import {CartContext} from '../Context/CartContext';
import { COLORS } from '../Constant/Colors';
import ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({isCart, onSearchChange}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchInputRef = useRef(null);
  const searchAnimation = useRef(new Animated.Value(0)).current;

  // Screens where search should appear inline in header
  const inlineSearchScreens = [
    'PRODUCT_DETAILS',
    'ProductDetailsScreen',
    'MyWishList',
    'CART',
  ];

  useEffect(() => {
    if (showSearchInput) {
      Animated.timing(searchAnimation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start(() => {
        searchInputRef.current?.focus();
      });
    } else {
      Animated.timing(searchAnimation, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [showSearchInput, searchAnimation]);

  const handleSearchPress = () => {
    if (inlineSearchScreens.includes(route.name)) {
      // Show inline search in header
      setShowSearchInput(!showSearchInput);
      if (showSearchInput) {
        setSearchText('');
        onSearchChange && onSearchChange('');
      }
    } else {
      // Navigate to categories screen
      navigation.navigate('CATEGORIES', {focusSearch: true});
    }
  };

  const handleSearchTextChange = text => {
    setSearchText(text);
    onSearchChange && onSearchChange(text);
  };

  const handleIconPress = iconName => {
    try {
      switch (iconName) {
        case 'search':
          handleSearchPress();
          break;
        case 'favorites':
          navigation.navigate('MyWishList');
          break;
        case 'cart':
          navigation.navigate('CART');
          break;
        default:
          break;
      }
    } catch (error) {
      console.warn('Navigation error:', error);
    }
  };

  const handleBack = () => {
    try {
      if (route.name === 'HOME' || route.name === 'MainHome') {
        // On home screen, show menu drawer
        navigation.navigate('MainHome');
        // navigation.openDrawer();
      } else {
        // On other screens, go back
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate('HOME');
        }
      }
    } catch (error) {
      console.warn('Navigation error:', error);
      // Fallback to home screen
      navigation.navigate('HOME');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.appDrawerContainer}>
          <TouchableOpacity
            onPress={handleBack}
            style={styles.appDrawerContainer}>
            {route.name === 'HOME' || route.name === 'MainHome' ? (
              <Image
                source={require('../assets/apps.png')}
                style={styles.appDrawerIcon}
              />
            ) : (
              <Image
                source={require('../assets/arrowback.png')}
                style={styles.appDrawerIcon}
              />
            )}
          </TouchableOpacity>
        </View>

        {/* Dynamic Icon Container */}
        {inlineSearchScreens.includes(route.name) && showSearchInput ? (
          // Show search input inline when search is active
          <Animated.View
            style={[
              styles.inlineSearchContainer,
              {
                width: searchAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [120, 250],
                }),
                opacity: searchAnimation,
              },
            ]}>
            <View style={styles.inlineInputContainer}>
              <Image
                source={require('../assets/search.png')}
                style={styles.inlineSearchIcon}
                tintColor={COLORS.yellow}
              />
              <TextInput
                ref={searchInputRef}
                placeholder="Search..."
                style={styles.inlineTextInput}
                value={searchText}
                onChangeText={handleSearchTextChange}
                onBlur={() => {
                  if (!searchText) {
                    setShowSearchInput(false);
                  }
                }}
              />
              {searchText.length > 0 && (
                <TouchableOpacity
                  onPress={() => {
                    setSearchText('');
                    onSearchChange && onSearchChange('');
                  }}
                  style={styles.inlineClearButton}>
                  <Text style={styles.clearText}>×</Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Compressed right icons */}
            <View style={styles.compressedIconContainer}>
              <TouchableOpacity onPress={() => handleIconPress('favorites')}>
                <Image
                  source={require('../assets/favoriteFilled.png')}
                  style={styles.compressedIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleIconPress('cart')}>
                <Image
                  source={require('../assets/focused/shopping_cart.png')}
                  style={styles.compressedIcon}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
        ) : (
          // Show normal icons when search is not active
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => handleIconPress('search')}>
              <Image
                source={require('../assets/focusedSearch.png')}
                style={styles.appSearchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('favorites')}>
              <Image
                source={require('../assets/favoriteFilled.png')}
                style={styles.appFavoriteIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('cart')}>
              <Image
                source={require('../assets/focused/shopping_cart.png')}
                style={styles.appCartIcon}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Remove the old animated search container below */}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 5,
  },
  appDrawerContainer: {
    backgroundColor: 'transparent',
    // height: 44,
    // width: 44,
    borderRadius: 22,
    // marginBottom: 1 ,
    // paddingLeft: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  appDrawerIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.icon
    // marginLeft: 10,
  },
  appSearchIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    tintColor: COLORS.icon
  },
  appFavoriteIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    tintColor: COLORS.icon
  },
  appCartIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
    tintColor: COLORS.icon
  },
  iconContainer: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // New inline search styles
  inlineSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 8,
  },
  inlineInputContainer: {
    backgroundColor: 'transparent',
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    marginRight: 8,
  },
  inlineSearchIcon: {
    height: 18,
    width: 18,
    marginLeft: 12,
    marginRight: 8,
    tintColor: 'red'
  },
  inlineTextInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#2c2c2c',
    paddingVertical: 0,
    paddingRight: 8,
  },
  inlineClearButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  compressedIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 60,
  },
  compressedIcon: {
    height: 24,
    width: 24,
  },
  titleText: {
    fontSize: 28,
    fontFamily: fonts.regular,
    color: '#000000',
  },
  clearText: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
});
