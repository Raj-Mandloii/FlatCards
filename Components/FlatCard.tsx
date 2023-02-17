import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export function FlatCard() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginTop:20
  },
  container: {
    flex:1,
    flexDirection:"row",
    padding:8,
  },
  card: {
    width: '20%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});
