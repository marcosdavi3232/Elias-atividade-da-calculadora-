import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputField from './components/InputField';
import Button from './components/Button';
import ResultDisplay from './components/ResultDisplay';
import styles from './styles/styles';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('Informe seus dados!');
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    // Validação de campos vazios
    if (!peso || !altura) {
      setMensagem('Informe seus dados!');
      setResultado(null);
      setClassificacao('');
      return;
    }

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Validação de valores
    if (pesoNum <= 0 || alturaNum <= 0) {
      setMensagem('Informe valores válidos!');
      setResultado(null);
      setClassificacao('');
      return;
    }

    // Cálculo do IMC: peso / (altura/100)²
    const alturaMetros = alturaNum / 100;
    const imc = pesoNum / (alturaMetros * alturaMetros);
    const imcFormatado = imc.toFixed(1);

    setResultado(imcFormatado);
    
    // Classificação do IMC
    let classificacaoIMC = '';
    if (imc < 18.5) {
      classificacaoIMC = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacaoIMC = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacaoIMC = 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      classificacaoIMC = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 40) {
      classificacaoIMC = 'Obesidade grau II';
    } else {
      classificacaoIMC = 'Obesidade grau III';
    }

    setClassificacao(classificacaoIMC);
  };

  const resetar = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
    setMensagem('Informe seus dados!');
    setClassificacao('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          {/* Botão Resetar */}
          <View style={styles.resetContainer}>
            <Button 
              title="Resetar" 
              onPress={resetar}
              style={styles.resetButton}
            />
          </View>

          {/* Card Principal */}
          <View style={styles.card}>
            <Text style={styles.title}>Calculadora IMC</Text>

            {/* Input Peso */}
            <InputField
              label="Peso (kg)"
              placeholder="Ex: 72"
              value={peso}
              onChangeText={setPeso}
              keyboardType="numeric"
            />

            {/* Input Altura */}
            <InputField
              label="Altura (cm)"
              placeholder="Ex: 171"
              value={altura}
              onChangeText={setAltura}
              keyboardType="numeric"
            />

            {/* Botão Calcular */}
            <Button 
              title="Calcular" 
              onPress={calcularIMC}
              style={styles.calculateButton}
            />

            {/* Resultado */}
            <ResultDisplay 
              resultado={resultado}
              mensagem={mensagem}
              classificacao={classificacao}
            />
          </View>

          {/* Tabela de Classificação */}
          <View style={styles.tableContainer}>
            <Text style={styles.tableTitle}>Tabela de Classificação</Text>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Abaixo de 18,5</Text>
              <Text style={styles.tableText}>Abaixo do peso</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>18,5 - 24,9</Text>
              <Text style={styles.tableText}>Peso normal</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>25,0 - 29,9</Text>
              <Text style={styles.tableText}>Sobrepeso</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>30,0 - 34,9</Text>
              <Text style={styles.tableText}>Obesidade grau I</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>35,0 - 39,9</Text>
              <Text style={styles.tableText}>Obesidade grau II</Text>
            </View>
            
            <View style={styles.tableRow}>
              <Text style={styles.tableText}>Acima de 40,0</Text>
              <Text style={styles.tableText}>Obesidade grau III</Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}