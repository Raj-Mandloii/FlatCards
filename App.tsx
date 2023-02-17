import react from 'react';
import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';
import Elevatedcards from './Components/Elevatedcards';
import FancyCard from './Components/FancyCard';
import {FlatCard} from './Components/FlatCard';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <Elevatedcards />
        <Text style={styles.headingText}>Trending Places</Text>
        <ScrollView horizontal>
          <FancyCard />
          <FancyCard />
        </ScrollView>
        <ActionCard />
        {/* <ContactList /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
});

export default App;
