import { StyleSheet, Text, View } from "react-native";

export const Title = () => {
  return (
    <View>
      <Text style={styles.h1}>OneBitHealth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: "red",
    alignItems: "center",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
