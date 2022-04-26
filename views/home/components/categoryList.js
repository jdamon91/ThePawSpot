import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { View, Text, Colors } from "react-native-ui-lib";

const categoryData = [
  {
    title: "Vets",
    icon: require("../../../assets/animal-paw.png"),
    size: 45,
  },
  {
    title: "Shelters",
    icon: require("../../../assets/animal-shelter.png"),
    size: 53,
  },
  {
    title: "Lost Pets",
    icon: require("../../../assets/animal-lost.png"),
    size: 52,
  },
  {
    title: "Donate",
    icon: require("../../../assets/animal-charity.png"),
    size: 50,
  },
  {
    title: "Adopt",
    icon: require("../../../assets/animal-adopt.png"),
    size: 50,
  },
];

const CategoryList = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryHandler = (category, index) => {
    setActiveIndex(index);
    props.changeActiveCategory(category);
  };

  const renderCategoryItem = (item) => {
    let index = item.index;
    let category = item.item;
    return (
      <TouchableOpacity
        onPress={() => categoryHandler(category, index)}
        style={styles.categoryListItem}
      >
        <View
          style={[
            styles.categoryListItemContainer,
            {
              backgroundColor:
                activeIndex === index
                  ? Colors.primaryColor
                  : Colors.secondaryColor,
            },
          ]}
        >
          <Image
            source={category.icon}
            style={{
              width: category.size,
              height: category.size,
              tintColor:
                activeIndex === index
                  ? Colors.secondaryColor
                  : Colors.primaryColor,
            }}
          />
        </View>
        <Text style={styles.categoryListItemText}>{category.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.categoryListContainer}>
      <FlatList
        nestedScrollEnabled
        data={categoryData}
        keyExtractor={(item) => item.title}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryListContainer: {
    padding: 5,
    width: Dimensions.get("window").width,
    paddingRight: 25,
  },
  categoryListItemContainer: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
  },
  categoryListItem: {
    alignItems: "center",
    marginVertical: 10,
    marginRight: 20,
  },
  categoryListItemText: {
    fontSize: 14,
    marginTop: 3,
    letterSpacing: 0.2,
  },
});

export default CategoryList;
