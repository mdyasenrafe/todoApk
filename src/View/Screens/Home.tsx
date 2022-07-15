import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OwnText from "../Components/Text/OwnText";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <OwnText preset="h6">My Notes</OwnText>
        <AntDesign
          onPress={() => navigation.navigate("create")}
          name="pluscircleo"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
