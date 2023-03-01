import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { repos } from "../data/repos";
import { StarSvg } from "../svg/StarSvg";

export const RepositoryList = () => {
  return (
    <FlatList
      data={repos}
      ItemSeparatorComponent={() => {
        <Text></Text>;
      }}
      renderItem={({ item: repo }) => (
        <View style={styles.mapContainer} key={repo.name}>
          <Text style={styles.text}>{repo.name}</Text>
          <Text style={styles.text}>Description : {repo.description}</Text>
          <Text style={styles.text}> Repo URL: {repo.html_url}</Text>
          <Text style={styles.text}>
            Stars:{<StarSvg width={12} heigth={12} />} {repo.stargazers_count}
          </Text>
          <Text style={styles.text}>{repo.size} mb</Text>
        </View>
      )}></FlatList>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    marginTop: 15,
    padding: 10,
  },
  text: {
    color: "white",
  },
});
