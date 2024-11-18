import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

export default function AddBusiness() {
    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [form, setForm] = useState({
        name: '',
        contact: '',
        website: '',
        about: '',
        address: '',
    });

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add New Business',
            headerShown: true,
        });
    }, [navigation]);

    const onImagePick = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
        console.log(result);
    };

    const handleInputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Add submit logic here
        console.log('Form submitted:', form);
        console.log('Category:', category);
        console.log('Image:', image);
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headerText}>
                Add Business
            </Text>
            <Text style={styles.subHeaderText}>
                Fill all details in order to add new Business
            </Text>
            <TouchableOpacity style={styles.imagePicker} onPress={onImagePick}>
                {!image ? (
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2956/2956744.png' }}
                        style={styles.placeholderImage}
                    />
                ) : (
                    <Image
                        source={{ uri: image }}
                        style={styles.selectedImage}
                    />
                )}
            </TouchableOpacity>
            <View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Name'
                        value={form.name}
                        onChangeText={(text) => handleInputChange('name', text)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Contact'
                        value={form.contact}
                        onChangeText={(text) => handleInputChange('contact', text)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Website'
                        value={form.website}
                        onChangeText={(text) => handleInputChange('website', text)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='About'
                        value={form.about}
                        onChangeText={(text) => handleInputChange('about', text)}
                    />
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Address'
                        value={form.address}
                        onChangeText={(text) => handleInputChange('address', text)}
                    />
                </View>
                <View style={styles.container}>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue) => setCategory(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Category" value="" />
                        <Picker.Item label="Retail" value="retail" />
                        <Picker.Item label="Food & Beverage" value="food_beverage" />
                        <Picker.Item label="Services" value="services" />
                        <Picker.Item label="Health & Wellness" value="health_wellness" />
                        {/* Add more categories as needed */}
                    </Picker>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    headerText: {
        fontFamily: 'Outfit-bold',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    subHeaderText: {
        fontFamily: 'Outfit-bold',
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
        marginVertical: 10,
    },
    imagePicker: {
        alignItems: 'center',
        marginVertical: 20,
    },
    placeholderImage: {
        width: 100,
        height: 100,
    },
    selectedImage: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 8,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    submitButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    submitButtonText: {
        color: '#fff',
        fontFamily: 'Outfit-bold',
    },
});
