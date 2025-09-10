import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

const SubCategoriesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {categoryId, categoryName} = route.params;

  useEffect(() => {
    // Redirect to the improved CategoriesScreen with the category pre-selected
    navigation.replace('Categories', {
      categoryId,
      categoryName,
    });
  }, [categoryId, categoryName, navigation]);

  // This component will redirect immediately, so no UI is needed
  return null;
};

export default SubCategoriesScreen;
