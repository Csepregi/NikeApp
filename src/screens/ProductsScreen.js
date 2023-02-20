import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Pressable,
  useAnimatedValue,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import products from "../data/products";

const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("Product Details")}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductsScreen;
