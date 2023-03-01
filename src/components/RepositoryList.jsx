import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { repos } from "../data/repos";

export const RepositoryList = () => {
  return (
    <View>
      {repos.map((repo) => (
        <View style={styles.mapContainer}>
          <Text style={styles.text}>{repo.name}</Text>
          <Text>{repo.full_name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  text: {
    color: "white",
  },
});
