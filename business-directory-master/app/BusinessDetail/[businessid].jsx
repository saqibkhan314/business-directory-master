import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../configs/FirebaseConfigs';
import Intro from '../../components/BusinessDetail/Intro';
import ActionButton from '../../components/BusinessDetail/ActionButton';
import About from '../../components/BusinessDetail/About';

export default function BusinessDetails() {
    const { businessid } = useLocalSearchParams();
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetBusinessDetailById();
    }, [businessid]);

    const GetBusinessDetailById = async () => {
        try {
            const docRef = doc(db, 'BusinessList', businessid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setBusiness(docSnap.data());
            } else {
                console.log("No such document.");
            }
        } catch (error) {
            console.log("Error getting document:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View>
            {business ? (
                <View>
                    {/* intro */}
                    <Intro business={business} />
                    {/* action buttons */}
                    <ActionButton business={business} />
                    {/* about section */}
                    <About business={business}/>
                </View>
            ) : (
                <Text>No business details found.</Text>
            )}
        </View>
    );
}
