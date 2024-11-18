import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Linking, Share } from 'react-native';
import React from 'react';

export default function ActionButton({ business }) {
    const actionButtonMenu = [
        {
            id: 1,
            name: 'Call',
            icon: require('./../../assets/images/call.png'),
            url: 'tel:' + business?.contact
        },
        {
            id: 2,
            name: 'Location',
            icon: require('./../../assets/images/pin.png'),
            url: 'https://www.google.com/maps/search/?api=1&query=' + business?.address,
        },
        {
            id: 3,
            name: 'Web',
            icon: require('./../../assets/images/web.png'),
            url: business?.website?.startsWith('http') ? business?.website : 'http://' + business?.website,
        },
        {
            id: 4,
            name: 'Share',
            icon: require('./../../assets/images/share1.png'),
            action: () => shareContent('Check out this business: ' + business?.website),
        }
    ];

    const handlePress = (url) => {
        if (url) {
            Linking.openURL(url).catch(err => console.error('An error occurred', err));
        }
    };

    const shareContent = async (message) => {
        try {
            const result = await Share.share({
                message: message,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type: ', result.activityType);
                } else {
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error) {
            console.error('An error occurred while sharing', error);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={4}
                data={actionButtonMenu}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        onPress={() => item.action ? item.action() : handlePress(item.url)} 
                        style={styles.button}
                    >
                        <Image source={item.icon} style={styles.icon} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    text: {
        fontFamily: 'Outfit-Regular',
        fontSize: 12,
    },
});
