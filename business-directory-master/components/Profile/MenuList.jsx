import { View, Text, Image, FlatList, TouchableOpacity, Share, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function MenuList() {
  const { signOut } = useAuth();
  const menuList = [
    {
      id: 1,
      name: 'Add Business',
      icon: require('./../../assets/images/more.png'), 
      path: '/business/addbusiness'
    },
    {
      id: 2,
      name: 'My Business',
      icon: require('./../../assets/images/business.png'),
      path: '/business/my-business'
    },
    {
      id: 3,
      name: 'Share App',
      icon: require('./../../assets/images/share1.png'),
      path: 'share'
    },
    {
      id: 4,
      name: 'Logout',
      icon: require('./../../assets/images/logout.png'),
      path: 'logout'
    },
  ];

  const router = useRouter();

  const onMenuClick = async (item) => {
    if (item.path === 'logout') {
      await signOut();
      return;
    }
    if (item.path === 'share') {
      Share.share({
        message: 'Download the app'
      });
      return;
    }
    router.push(item.path);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={menuList}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onMenuClick(item)} style={styles.menuItem}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={styles.developers}>
        Developed by Raghvendra Pratap, IrshadUl Haque, Saurabh Kumar Singh,  Mohamad Saqib Khan, and Bivek Kumar Sethi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  icon: {
    width: 50,
    height: 50,
  },
  menuText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 20,
    flex: 1,
  },
  developers: {
    fontFamily: 'Outfit',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  }
});
