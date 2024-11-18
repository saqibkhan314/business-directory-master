import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function About({ business }) {
  if (!business) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>{business.about || 'No information available.'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Outfit-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
  },
});
