import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {COLORS} from '../Constant/Colors';
// import {useTheme} from '../Context/ThemeContext';

const Tags = () => {
<<<<<<< HEAD
  const [selected, setSelected] = useState("Trending Now");
  const tags = ["Trending Now", "Featured", "New Arrivals", "Winter", "Summer"];
=======
  const [selected, setSelected] = useState("Best Sales");
  const tags = ["Best Sales", "New Arrivals", "Rudraksha", "Pooja", "Mala"];
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
  // const {getThemeColors} = useTheme();
  // const themeColors = getThemeColors();

  const styles = StyleSheet.create({
    tagText: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 5,
      marginHorizontal: 10,
      color: COLORS.grey,
      backgroundColor: COLORS.white,
      fontWeight: "700",
    },
    isSelected: {
<<<<<<< HEAD
      backgroundColor: COLORS.button,
=======
      backgroundColor: COLORS.blue,
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
      color: "#FFFFFF",
    },
    container: {
      marginVertical: 10,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={tags}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => setSelected(item)}>
              <Text
                style={[
                  styles.tagText,
                  item == selected ? styles.isSelected : null,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

export default Tags;
