import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Tags = () => {
  const [selected, setSelected] = useState("Trending Now");
  const tags = ["Trending Now", "Featured", "New Arrivals", "Winter", "Summer"];
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
    backgroundColor: "#9d2c2cff",
    color: "#FFFFFF",
  },
  container: {
    marginVertical: 10,
  },
});
