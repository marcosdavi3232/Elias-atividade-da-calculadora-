import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}