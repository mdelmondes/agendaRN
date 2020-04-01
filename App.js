import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native'

export default function App(){
const [id, setId] = useState(2);
const [numero, setNumero] = useState ('');
const [nome, setNome] = useState('');
const [contatos, setContatos] = useState([])
const [contadorContatos, setContadorContatos] = useState(0);

const capturarNome = (nome) => {
  setNome (nome);
}

const capturarNumero = (numero) => {
  setNumero (numero);
};
contato=(id, nome, numero);


const adicionarContato = () =>{
  setContatos((contatos) => {
    setId(id +2);
    setContadorContatos(contadorContatos + 1);
    return [...contatos, {key: contadorContatos.toString(), value:contato = (id), value2:
    contato=(nome), value3:contato=(numero)}];
  })

  setNome ('');
  setNumero ('');
};
  return (
    <View style={styles.container}>

      <View style={styles.cadastro}>
        <Text style={styles.text}>Digite seu nome:</Text>
        <TextInput 
          placeholder="Nome"
          style={styles.inputText}
          onChangeText={capturarNome}
          value ={nome}
        />
    
      <Text style={styles.text}>Digite seu telefone: </Text>
      <TextInput 
        placeholder="Telefone"
        style={styles.inputText}
        onChangeText={capturarNumero}
        value={numero}
        />

        <TouchableOpacity style={styles.btn}  onPress={adicionarContato}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 15, fontWeight: "bold", marginLeft: 10, paddingTop: 30}}>Lista de contatos</Text>
      <FlatList
      data={contatos}
      renderItem={
        contato =>(

          <View style={styles.listItem}>
            <Text>#{contato.item.value} - {contato.item.value2}</Text>
            <Text>{contato.item.value3}</Text>

          </View>

        )
        }
      />
    </View>
    
  );

}


const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50
    },

    cadastro: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(230,230,230)',
      paddingBottom: 20
    },

    inputText: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#c3c3c3',
      width: 300,
      padding: 10,
      margin: 10
    },

    listItem: {
      backgroundColor: '#FFF',
      margin: 15,
      padding: 10,
      paddingBottom: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 2,
      backgroundColor: '#f9f9f9',
      borderColor: '#ddd',
      borderRadius: 10, 
    },  

    btn: {
      alignItems: 'center',
      backgroundColor: '#ac00e6',
      padding: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#c3c3c3',
      marginRight: 10,
      marginTop: 8,
    },

    text: {
      fontWeight: 'bold',
      fontSize: 15
    },
  }
);