import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons';

export const Button = ({
  bgColor = '#FFA928',
  textColor = 'white',
  iconName = undefined,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{backgroundColor: bgColor}, styles.button]}>
      <Text style={[styles.buttonText, {color: textColor}]}>{children}</Text>
      {iconName && <AntDesign name={iconName} size={22} color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 11,
    justifyContent: 'space-between',
    minWidth: 200,
    display: 'flex',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.22,

    elevation: 2,
  },
  buttonText: {
    fontFamily: 'PoppinsBold',
  },
});

export default Button;
