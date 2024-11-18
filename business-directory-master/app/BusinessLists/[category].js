import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import BusinessListCard from '../../components/BusinessList/BusinessListCard';
import { Colors } from '../../constants/Colors';

export default function BusinessListByCategory() {

    const navigation = useNavigation();

    const { category } = useLocalSearchParams();
    const[businesslist,setBusinessList]=useState([]);
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle:category

        });
        getBusinessList()
    },[]);
    const getBusinessList=async()=>{
        const q=query(collection(db,'BusinessList'),where("category",'==',category));
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc)=>{
            console.log(doc.data())
            setBusinessList(prev=>[...prev,{id:doc?.id, ...doc.data()}])
        })
    }
    return (
        <View>

            {businesslist?.length>0? <FlatList
            data={businesslist}
            renderItem={({item,index})=>(
                <BusinessListCard
                business={item}
                key={index}
                />
            )}
            />:<Text style={{
                fontSize:20,
                fontFamily:'Outfit-Bold',
                color:Colors.GARY,
                textAlign:'center',
                marginTop:'50%'
            }}>No Business Found!!!</Text>}
        </View>
    )
}