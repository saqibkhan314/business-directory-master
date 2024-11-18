import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Slider from '../../components/Home/Slider';
import Category from '../../components/Home/Category';
import Business from '../../components/Home/Business';

export default function home() {
  return (
    <ScrollView>
      {/* {header} */}
      <Header />
      {/* slider */}
      <Slider/>
      {/* category */}
      <Category/>
      {/* popular business list */}
      <Business/>
      <View style={{
        height:100,
      }}>

      </View>
    </ScrollView>
  );
}