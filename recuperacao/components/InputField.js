import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles';

export default function InputField({ label, placeholder, value, onChangeText, keyboardType }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType || 'default'}
      />
    </View>
  );
}