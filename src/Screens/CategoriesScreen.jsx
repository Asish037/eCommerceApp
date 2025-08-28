import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const CategoriesScreen = () => {
  const route = useRoute();
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Focus search input if navigated here from header search
    if (route.params?.focusSearch) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 300);
    }
  }, [route.params]);

  const handleSearchChange = text => {
    setSearchText(text);
    // Add your search logic here
    console.log('Searching for:', text);
  };

  return (
    <LinearGradient
      colors={['#d8b2bbff', '#cbb5bbff']}
      style={styles.container}>
      {/* Search Input */}
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
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={() => setSearchText('')}
            style={styles.clearButton}>
            <Text style={styles.clearText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Categories Content */}
      <View style={styles.content}>
        <Text style={styles.comingSoonText}>Categories coming soon</Text>
        <Text style={styles.subText}>
          {searchText
            ? `Searching for: "${searchText}"`
            : 'Browse all categories here'}
        </Text>
      </View>
      <View>
        <View>
          <Text>Sort By</Text>
        </View>
        <View>
          <Text>Filter</Text>
        </View>
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
    marginBottom: 20,
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
    color: '#333',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  comingSoonText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    textAlign: 'center',
  },
});
