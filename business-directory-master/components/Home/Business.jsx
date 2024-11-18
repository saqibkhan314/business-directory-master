import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { collection, getDoc, getDocs, limit, query, QuerySnapshot } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import BusinessCard from './BusinessCard'

export default function Business() {

    const [businessList, setBusinessList] = useState([]);
    useEffect(() => {
        GetBusinessList();
    }, [])
    const GetBusinessList = async () => {
        setBusinessList([]);
        const q = query(collection(db, 'BusinessList'), limit(10));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setBusinessList(prev => [...prev, doc.data()])
        })

    }
    return (
        <View>
            <View style={{
                padding: 20, display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    fontFamily: 'Outfit-Bold',
                    display: 'flex,'
                }}>StartUPs
                </Text>
               
            </View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={businessList}
                renderItem={({ item, index }) => (
                    <BusinessCard
                        key={index}
                        business={item}
                    />
                )}
            />
        </View>
    )
}