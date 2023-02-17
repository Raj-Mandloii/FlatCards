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
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
