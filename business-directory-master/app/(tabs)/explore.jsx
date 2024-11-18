import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Category from './../../components/Home/Category';
import { db } from '../../configs/FirebaseConfigs';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Colors } from '../../constants/Colors';
import ExploreBusinessList from './../../components/Explore/ExploreBusinessList';

export default function explore() {
  const [businessList, setBusinessList] = useState([]);

  const GetBusinessByCategory = async (category) => {
    setBusinessList([]);
    const q = query(collection(db, 'BusinessList'), where('category', '==', category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'Outfit-Bold',
        }}
      >
        Explore More
      </Text>
      {/* Search bar */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          marginTop: 15,
          borderRadius: 8,
          borderColor: 'blue',
          borderWidth: 1,
        }}
      >
        <Ionicons name="search" size={24}></Ionicons>
        <TextInput
          placeholder="Search..."
          style={{
            fontSize: 16,
            fontFamily: 'Outfit-Regular',
          }}
        ></TextInput>
      </View>
      <Category
        explore={true}
        onCategorySelect={(category) => GetBusinessByCategory(category)}
      />
      {/* Business list */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  );
}
