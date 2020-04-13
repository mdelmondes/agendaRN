import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Cores from '../../cores/index';
import Medidas from '../../medidas/index';


const ContatoInput = (props) => {
    const [contato, setContato] = useState('');
    const [telefone, setTelefone] = useState('');

    const capturaContato = (contato) => { setContato(contato); }
    const capturaTelefone = (telefone) => { setTelefone(telefone); }

    return (
        <View style={styles.cadastroContato}>
            <TextInput
                placeholder="Nome"
                style={styles.cadastroInputText}
                onChangeText={capturaContato}
                value={contato}
            />
            <TextInput
                placeholder="Telefone"
                keyboardType="number-pad"
                style={styles.cadastroInputText}
                onChangeText={capturaTelefone}
                value={telefone}
            />
            <TouchableOpacity style={styles.btn} onPress={() => props.onAdicionarContato(contato, telefone)}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    cadastroContato: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: Medidas.twenty,
        borderBottomWidth: Medidas.two,
        borderBottomColor: 'rgb(230,230,230)',
        paddingBottom: Medidas.twenty,
    },
    cadastroInputText: {
        fontSize: Medidas.twenty,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: Medidas.one,
        marginBottom: Medidas.five,
        padding: Medidas.one

    },
    btn: {
        alignItems: 'center',
        backgroundColor: Cores.corBotao,
        padding: Medidas.ten,
        borderRadius: Medidas.five,
        borderWidth: Medidas.one,
        borderColor: Cores.borderBotao,
        marginTop: Medidas.eight,
    },
});

export default ContatoInput;