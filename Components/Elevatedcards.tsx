import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Elevatedcards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevatedcards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😍</Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 10,
  },
  cardElevated: {
    backgroundColor: 'teal',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor:"#333",
    shadowOpacity: 0.6,
    shadowRadius:5
  },
});
export default Elevatedcards;
