import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
<<<<<<< HEAD
import {COLORS} from '../Constant/Colors';
// import {useTheme} from '../Context/ThemeContext';
=======
import { COLORS } from "../Constant/Colors";
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd

const Tags = () => {
  const [selected, setSelected] = useState("Trending Now");
  const tags = ["Trending Now", "Featured", "New Arrivals", "Winter", "Summer"];
<<<<<<< HEAD
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
      backgroundColor: COLORS.blue,
      color: "#FFFFFF",
    },
    container: {
      marginVertical: 10,
    },
  });

=======
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
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
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  tagText: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 10,
    color: "#c4c4c4ff",
    backgroundColor: "#5a4c4cc7",
    fontWeight: "700",
  },
  isSelected: {
    backgroundColor: COLORS.iconText,
    color: "#FFFFFF",
  },
  container: {
    marginVertical: 10,
  },
});
>>>>>>> 5222bad0a19ef89e29941a2d8e16cfd8e6af7edd
