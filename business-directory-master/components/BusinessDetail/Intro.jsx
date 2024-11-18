import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
export default function Intro({ business }) {
  if (!business) {
    return null;
  }
  const router=useRouter();

  return (
    <View>
        <View style={{
            position:'absolute',
            zIndex:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            width:'100%',
            padding:20,
        }}>
        <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>
        <FontAwesome6 name="heart" size={40} color="white" />
        </View>
      <Image
        source={{ uri: business.imageUrl }}
        style={styles.image}
      />
      <View style={{
        padding:20,
        marginTop:-20,
        backgroundColor:'#fff',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
      }}>
        <Text
         style={{
            fontSize:20,
            fontFamily:'Outline-Bold',

         }}>{business.name}</Text>
        <Text style={{
            fontFamily:'Outline-Medium',
            fontSize:18,
        }}>{business.address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});
