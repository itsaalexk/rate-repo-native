import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "react-native-web";
import { GithubSvg } from "../svg/GithubSvg";
import { RepositoryList } from "./RepositoryList";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rate Repo Github {<GithubSvg width={20} heigth={20} />}</Text>
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontFamily: "consolas",
    fontWeight: "bold",
    fontSize: 30,
  },
});
