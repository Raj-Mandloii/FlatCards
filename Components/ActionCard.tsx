import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string): void {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/max/1400/0*ZOKFlKSD6V3lPDIC.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            JavaScript Engine is simply a computer program that executes
            JavaScript code. There are a lot of steps involved in doing that,
            but essentially executing JavaScript code is what an engine does.{' '}
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            // style={styles.socialLinks}
            onPress={() =>
              openWebsite(
                'https://blog.devgenius.io/inside-the-javascript-engine-bb7b9f26e84b',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.socialLinks}
            onPress={() =>
              openWebsite(
                'https://blog.devgenius.io/inside-the-javascript-engine-bb7b9f26e84b',
              )
            }>
            <Text style={styles.socialLinks}>Follow Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    // width: 350,
    // height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding:10,

  },
  footerContainer: {
    padding:8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-evenly",
  },
  socialLinks: {
    fontSize:16,
    backgroundColor:'#FFF',
    color:'teal',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6,
  },
});
