# 📱 Calculadora de IMC - React Native

Aplicativo de Calculadora de IMC (Índice de Massa Corporal) desenvolvido em React Native com Expo.

## 🎯 Funcionalidades

- ✅ Entrada de peso (kg)
- ✅ Entrada de altura (cm)
- ✅ Cálculo automático do IMC
- ✅ Classificação do resultado
- ✅ Botão Resetar para limpar campos
- ✅ Validação de dados
- ✅ Interface responsiva
- ✅ Tabela de classificação de referência

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Expo Go instalado no celular (Android/iOS)

### Instalação

1. Clone o repositório ou extraia o ZIP
2. Navegue até a pasta do projeto:
```bash
cd calculadora-imc
```

3. Instale as dependências:
```bash
npm install
```

4. Inicie o projeto:
```bash
npx expo start
```

5. Escaneie o QR Code com o app Expo Go no seu celular

## 📸 Screenshots

### Tela 1: Inicial
![Tela Inicial](./screenshots/tela-inicial.png)
*Tela inicial com campos vazios e mensagem "Informe seus dados!"*

### Tela 2: Cálculo Realizado
![Cálculo Realizado](./screenshots/calculo-realizado.png)
*Tela mostrando o IMC calculado e classificação*

### Tela 3: Estado Resetado
![Estado Resetado](./screenshots/estado-resetado.png)
*Tela após clicar no botão Resetar*

## 🎨 Cores Utilizadas

- **Fundo**: #353535
- **Destaque**: #9EEFC3
- **Card**: #2a2a2a

## 📐 Fórmula do IMC
```
IMC = peso / (altura/100)²
```

## 📊 Classificação do IMC

| IMC | Classificação |
|-----|---------------|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 - 24,9 | Peso normal |
| 25,0 - 29,9 | Sobrepeso |
| 30,0 - 34,9 | Obesidade grau I |
| 35,0 - 39,9 | Obesidade grau II |
| Acima de 40,0 | Obesidade grau III |

## 🏗️ Estrutura do Projeto
```
calculadora-imc/
├── App.js                    # Componente principal
├── package.json              # Dependências do projeto
├── app.json                  # Configurações do Expo
├── babel.config.js           # Configurações do Babel
├── components/               # Componentes reutilizáveis
│   ├── InputField.js        # Campo de entrada customizado
│   ├── Button.js            # Botão customizado
│   └── ResultDisplay.js     # Exibição do resultado
└── styles/                   # Estilos da aplicação
    └── styles.js            # Arquivo de estilos centralizado
```

## 🧪 Como Testar

1. **Teste 1 - Tela Inicial**:
   - Abra o app
   - Verifique se aparece "Informe seus dados!"
   - Tire screenshot

2. **Teste 2 - Cálculo**:
   - Digite peso: 72
   - Digite altura: 171
   - Clique em "Calcular"
   - Verifique se mostra IMC: 24.6 e "Peso normal"
   - Tire screenshot

3. **Teste 3 - Resetar**:
   - Clique no botão "Resetar"
   - Verifique se os campos limparam
   - Verifique se voltou "Informe seus dados!"
   - Tire screenshot

## ✅ Requisitos Atendidos

- [x] Interface seguindo o design do Figma
- [x] Cores corretas (#353535 e #9EEFC3)
- [x] Entrada de peso e altura
- [x] Botão Calcular funcional
- [x] Botão Resetar funcional
- [x] Cálculo do IMC correto
- [x] Resultado com 1 casa decimal
- [x] Classificação do IMC
- [x] Validação de campos vazios
- [x] Validação de valores inválidos
- [x] Componentes separados
- [x] Código organizado
- [x] Boas práticas React Native

## 👨‍💻 Desenvolvedor

**Aluno**: [Francisco Gabriel Monte Dantas]
**Curso**: Desenvolvimento de Aplicativos
**Disciplina**: React Native
**Atividade**: Recuperação - Calculadora de IMC

## 📝 Observações

Este projeto foi desenvolvido como atividade de recuperação seguindo fielmente o design proposto no Figma e implementando todas as funcionalidades solicitadas.

## 📄 Licença

Este projeto é livre para uso educacional.