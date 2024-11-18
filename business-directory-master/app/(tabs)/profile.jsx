import { View, Text } from 'react-native'
import React from 'react'
import MenuList from '../../components/Profile/MenuList'
import UserIntro from '../../components/Profile/UserIntro'

export default function profile() {
  return (
    <View style={{padding:20}}
    >
      <Text style={{
        fontFamily:'Outfit-Bold',
        fontSize:35,textAlign:'center'
      }}>profile</Text>


      { /*user info */}
      <UserIntro/>
      {/* {/menu list/} */}
      <MenuList/>
    </View>
  )
}