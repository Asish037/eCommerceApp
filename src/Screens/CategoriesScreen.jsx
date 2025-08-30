import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ProductCard from '../Components/ProductCard';
import {fonts} from '../utils/fonts';
import data from '../data/data.json';

const {width} = Dimensions.get('window');

const CategoriesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const searchInputRef = useRef(null);

  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Men');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const tabs = ['Men', 'Women', 'Kids', 'Bags', 'Shoes', 'All'];

  useEffect(() => {
    // Focus search input if navigated here from header search
    if (route.params?.focusSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [route.params]);

  const filterProducts = useCallback(() => {
    let filtered = data.products;

    // Filter by tab/category
    if (selectedTab === 'Men') {
      filtered = filtered.filter(product => product.gender === 'men');
    } else if (selectedTab === 'Women') {
      filtered = filtered.filter(product => product.gender === 'women');
    } else if (selectedTab === 'Kids') {
      filtered = filtered.filter(
        product => product.category === 'kids' || product.gender === 'kids',
      );
    } else if (selectedTab === 'Bags') {
      filtered = filtered.filter(
        product =>
          product.category === 'bags' ||
          product.title.toLowerCase().includes('bag') ||
          product.description.toLowerCase().includes('bag'),
      );
    } else if (selectedTab === 'Shoes') {
      filtered = filtered.filter(
        product =>
          product.category === 'shoes' ||
          product.title.toLowerCase().includes('shoe') ||
          product.description.toLowerCase().includes('shoe'),
      );
    }

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter(
        product =>
          product.title.toLowerCase().includes(searchText.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          product.category.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    setFilteredProducts(filtered);
  }, [selectedTab, searchText]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const generateSuggestions = useCallback(text => {
    if (!text || text.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const allItems = [];
    const searchTerm = text.toLowerCase();

    // Extract unique categories
    const categories = [
      ...new Set(data.products.map(product => product.category)),
    ];
    categories.forEach(category => {
      if (category.toLowerCase().includes(searchTerm)) {
        allItems.push({type: 'category', value: category, display: category});
      }
    });

    // Extract unique product titles and common terms
    const productTerms = new Set();
    data.products.forEach(product => {
      // Add full title if it matches
      if (product.title.toLowerCase().includes(searchTerm)) {
        productTerms.add(product.title);
      }

      // Add individual words from title
      const titleWords = product.title.split(' ');
      titleWords.forEach(word => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '');
        if (
          cleanWord.length > 2 &&
          cleanWord.toLowerCase().includes(searchTerm)
        ) {
          productTerms.add(cleanWord);
        }
      });
    });

    // Add common fashion terms that match
    const commonTerms = [
      'jeans',
      'shirt',
      'jacket',
      'sweater',
      'dress',
      'pants',
      'skirt',
      'blouse',
      'hoodie',
      'shorts',
      'leggings',
      'coat',
      'blazer',
      'cardigan',
      't-shirt',
      'polo',
      'tank',
      'vest',
      'suit',
      'denim',
      'cotton',
      'wool',
      'casual',
      'formal',
      'summer',
      'winter',
      'black',
      'white',
      'blue',
      'red',
    ];

    commonTerms.forEach(term => {
      if (term.includes(searchTerm)) {
        productTerms.add(term);
      }
    });

    productTerms.forEach(term => {
      if (
        !allItems.some(item => item.value.toLowerCase() === term.toLowerCase())
      ) {
        allItems.push({type: 'product', value: term, display: term});
      }
    });

    // Extract from descriptions for more variety
    const descriptionWords = new Set();
    data.products.forEach(product => {
      const words = product.description.split(' ');
      words.forEach(word => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if (cleanWord.length > 3 && cleanWord.includes(searchTerm)) {
          descriptionWords.add(cleanWord);
        }
      });
    });

    descriptionWords.forEach(word => {
      if (
        !allItems.some(item => item.value.toLowerCase() === word.toLowerCase())
      ) {
        allItems.push({type: 'keyword', value: word, display: word});
      }
    });

    // Limit to top 5 suggestions and sort by relevance
    const sortedSuggestions = allItems
      .sort((a, b) => {
        // Prioritize exact matches at the beginning
        const aStartsWith = a.value.toLowerCase().startsWith(searchTerm);
        const bStartsWith = b.value.toLowerCase().startsWith(searchTerm);
        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;

        // Then prioritize by type: category > product > keyword
        const typeOrder = {category: 0, product: 1, keyword: 2};
        return typeOrder[a.type] - typeOrder[b.type];
      })
      .slice(0, 3);

    setSuggestions(sortedSuggestions);
    setShowSuggestions(sortedSuggestions.length > 0);
  }, []);

  const handleSearchChange = text => {
    setSearchText(text);
    generateSuggestions(text);
  };

  const handleSuggestionSelect = suggestion => {
    setSearchText(suggestion.value);
    setShowSuggestions(false);
    // The filterProducts will be called automatically due to useEffect dependency
  };

  const handleProductClick = item => {
    navigation.navigate('PRODUCT_DETAILS', {item});
  };

  const renderProductCard = ({item}) => (
    <View style={styles.productCardContainer}>
      <ProductCard
        item={item}
        handleProductClick={handleProductClick}
        toggleFavorite={() => {}} // You can implement favorite functionality
      />
    </View>
  );

  return (
    <LinearGradient
      colors={['#e3e3e3ff', '#c3adb1ff']}
      style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require('../assets/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            ref={searchInputRef}
            placeholder="Search categories, products..."
            style={styles.textInput}
            value={searchText}
            onChangeText={handleSearchChange}
            onFocus={() => {
              if (searchText.length >= 2) {
                generateSuggestions(searchText);
              }
            }}
            onBlur={() => {
              // Delay hiding suggestions to allow for suggestion selection
              setTimeout(() => setShowSuggestions(false), 150);
            }}
          />
          {searchText.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSearchText('');
                setShowSuggestions(false);
              }}
              style={styles.clearButton}>
              <Text style={styles.clearText}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Auto Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {suggestions.map((suggestion, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionItem}
                onPress={() => handleSuggestionSelect(suggestion)}>
                <Image
                  source={require('../assets/search.png')}
                  style={styles.suggestionIcon}
                />
                <View style={styles.suggestionTextContainer}>
                  <Text style={styles.suggestionText}>
                    {suggestion.display}
                  </Text>
                  <Text style={styles.suggestionType}>
                    {suggestion.type === 'category'
                      ? 'Category'
                      : suggestion.type === 'product'
                      ? 'Product type'
                      : 'Keyword'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Category Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}
        contentContainerStyle={styles.tabContentContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTabButton,
            ]}
            onPress={() => setSelectedTab(tab)}>
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Products Grid */}
      <View style={styles.productsContainer}>
        {filteredProducts.length > 0 ? (
          <FlatList
            data={filteredProducts}
            renderItem={renderProductCard}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productsGrid}
            columnWrapperStyle={styles.row}
          />
        ) : (
          <View style={styles.noProductsContainer}>
            <Text style={styles.noProductsText}>
              No products found for {selectedTab}
            </Text>
            <Text style={styles.noProductsSubText}>
              {searchText
                ? `Try searching for something else`
                : `Check back later for new arrivals`}
            </Text>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchContainer: {
    marginBottom: 20,
    zIndex: 1000,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  searchIcon: {
    height: 26,
    width: 26,
    marginHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#110e0eff',
    paddingVertical: 0,
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 4,
  },
  clearText: {
    fontSize: 20,
    color: '#666',
    fontWeight: 'bold',
  },
  suggestionsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    maxHeight: 200,
  },
  suggestionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionIcon: {
    height: 16,
    width: 16,
    marginRight: 12,
    // opacity: 0.6,
  },
  suggestionTextContainer: {
    flex: 1,
  },
  suggestionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#111010ff',
  },
  suggestionType: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#111010ff',
    marginTop: 2,
  },
  tabContainer: {
    marginBottom: 20,
    maxHeight: 50,
  },
  tabContentContainer: {
    paddingHorizontal: 4,
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  activeTabButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  productsContainer: {
    flex: 1,
  },
  productsGrid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productCardContainer: {
    width: (width - 48) / 2, // Account for padding and spacing
  },
  noProductsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  noProductsText: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  noProductsSubText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
