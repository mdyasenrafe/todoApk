import React from "react";
import { Text, View } from "react-native";
import OwnText from "../Components/Text/OwnText";

const Home = () => {
  return (
    <View>
      <OwnText preset="h1" style={{ color: "red" }}>
        Home
      </OwnText>
    </View>
  );
};

export default Home;
