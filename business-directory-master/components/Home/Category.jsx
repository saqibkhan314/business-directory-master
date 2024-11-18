import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from './../../constants/Colors'
import { collection, getDocs, query, QuerySnapshot } from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfigs'
import Categoryitem from './Categoryitem'
import { useRouter } from 'expo-router';

export default function Category() {

    const [categoryList, setCategoryList] = useState([]);
    const router=useRouter();
    useEffect(() => {
        GetCategoryList();
    }, [])
    const GetCategoryList = async () => {
        setCategoryList([])
        const q = query(collection(db, 'Category'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setCategoryList(prev => [...prev, doc.data()])
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
                    display:'flex,'
                }}>Category
                </Text>
                
            </View>
            <FlatList
                data={categoryList}
                horizontal={true}
                style={{ marginLeft: 20 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <Categoryitem category={item} key={index}
                        onCategoryPress={(category) => router.push('/BusinessLists/' + item.name)} />
                )}
            />
        </View>
    )
}