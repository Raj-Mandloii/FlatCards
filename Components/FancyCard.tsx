import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.toiimg.com/thumb/93105946/rajasthan.jpg?width=1200&height=900',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Desert</Text>
          <Text style={styles.cardLabel}>Rajasthan (राजस्थान)</Text>
          <Text style={styles.cardDescription}>
            Rajasthan is a state in northern India. It covers 342,239 square
            kilometres or 10.4 per cent of India's total geographical area. It
            is the largest Indian state by area and the seventh largest by
            population.
          </Text>
          <Text style={styles.cardDescription}>
            राजस्थान भारत गणराज्य का क्षेत्रफल के आधार पर सबसे बड़ा राज्य है।इस
            राज्य की एक अंतरराष्ट्रीय सीमा पाकिस्तान के साथ 1070 km लगती है।
            जिसे रेड क्लिप रेखा के नाम से जानते है| इसके अतिरिक्त यह देश के अन्य
            पाँच राज्यों से भी जुड़ा है। विकिपीडिया
          </Text>
          <Text style={styles.cardFooter}>120 min away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    width:350
  },
  card: {
    // width:"100%",
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    // height:400,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: 'black',
    fontSize: 10,
    marginBottom: 12,
  },
});
