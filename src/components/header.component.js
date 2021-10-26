import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons, Fontisto} from '@expo/vector-icons';

export const Header = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFA928',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexGrow: 0,
          flexShrink: 1,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Ionicons name="md-list-sharp" size={32} color="white" />
      </View>
      <View style={{flexGrow: 0, flexShrink: 1}}>
        <Text style={styles.headerText}>Resto App</Text>
      </View>
      <View
        style={{
          flexGrow: 0,
          flexShrink: 1,
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Fontisto name="email" size={28} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'PoppinsBold',
  },
});

export default Header;
