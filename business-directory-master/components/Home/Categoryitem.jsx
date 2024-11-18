import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './../../constants/Colors'

export default function Categoryitem({category,onCategoryPress}) {
  return (
    <TouchableOpacity onPress={()=>onCategoryPress(category)}>
    <View>
        <View style={{
            padding:15,
            backgroundColor:Colors.PINKS,
            borderRadius:99,
            marginRight:15,
        }}>
      <Image source={{uri:category.imageUrl}}
      style={{
        width:40,
        height:40,
      }}
      />
      </View>
      <Text style={{
        fontSize:12,
        fontFamily:'Outfit-Medium',
        textAlign:'center',
        marginTop:5,
      }}>{category.name}</Text>
    </View>
    </TouchableOpacity>
  )
}