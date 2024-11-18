import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, Image, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { Colors } from '@/constants/Colors';

if (Platform.OS !== 'web') {
    WebBrowser.maybeCompleteAuthSession();
}

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
                redirectUrl: Linking.createURL("/dashboard")
            });

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, [startOAuthFlow]);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('./../assets/images/login.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>
                    Your Ultimate
                    <Text style={styles.highlightedText}> Community STARTUP</Text> App
                </Text>
                <Text style={styles.description}>
                    Find your favourite Business and post your own Business to your community
                </Text>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={styles.btnText}>Let's get started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
    },
    image: {
        width: 250,
        height: 450,
        borderRadius: 20,
        borderWidth: 6,
        borderColor: '#000',
    },
    subContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: -20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Outfit-Bold',
        textAlign: 'center',
    },
    highlightedText: {
        color: Colors.PRIMARY,
    },
    description: {
        fontSize: 15,
        fontFamily: 'Outfit-Bold',
        textAlign: 'center',
        marginVertical: 15,
        color: Colors.GRAY,
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 99,
        marginTop: 20,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Outfit',
    },
});
