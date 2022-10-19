import Carousel from "react-native-reanimated-carousel";
import { StyleSheet, Image, Dimensions } from "react-native";

const data = [
  { image: require("../../../assets/join-community-image.png") },
  { image: require("../../../assets/adopt-shelter-image.png") },
];

const width = Dimensions.get("window").width - 15;

const ImageCarousel = () => {
  return (
    <Carousel
      width={width}
      height={245}
      data={data}
      renderItem={({ item }) => (
        <Image source={item.image} style={styles.homeCarouselImage} />
      )}
      autoPlay={false}
      autoPlayInterval={6000}
    />
  );
};

const styles = StyleSheet.create({
  homeCarouselImage: {
    width: width,
    height: 245,
    marginLeft: -15,
  },
});

export default ImageCarousel;
