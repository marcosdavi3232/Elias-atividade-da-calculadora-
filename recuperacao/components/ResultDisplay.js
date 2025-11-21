import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function ResultDisplay({ resultado, mensagem, classificacao }) {
  return (
    <View style={styles.resultContainer}>
      {resultado ? (
        <View>
          <Text style={styles.resultValue}>IMC: {resultado}</Text>
          <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
      ) : (
        <Text style={styles.placeholderText}>{mensagem}</Text>
      )}
    </View>
  );
}