import { View, Text, Image } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo'; // Assuming you are using Clerk for authentication

export default function UserIntro() {
  const { user } = useUser();

  return (
    <View style={{ display:'flex',alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Image source={{ uri: user?.imageUrl }}
                    style={{
                        width: 45,
                        height: 45,
                        borderRadius: 99,
                    }} />
      <Text style={{ fontSize: 18, fontFamily: 'Outfit-Bold' }}>
            {user?.fullName}
      </Text>
      <Text style={{ fontSize: 18, fontFamily: 'Outfit-Bold' }}>
            {user?.primaryEmailAddress?.emailAddress}
      </Text>
    </View>
  );
}