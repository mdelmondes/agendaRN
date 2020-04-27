import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Cartao from '../cartao/index';
import Cores from '../../cores/index';
import Medidas from '../../medidas/index';

const ContatoItem = (props) => {

    const excluirContato = () => {

        Alert.alert(

            'Excluir Contato',
            'Deseja mesmo excluir?',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => props.onDelete(props.keys)
                }
            ],

            { cancelable: false }
        )
    }

    return (
        <TouchableOpacity onLongPress={excluirContato}>
            <Cartao estilos={styles.itemNaLista}>
                <Text style={styles.text}>{'Cod:        ' + props.keys}</Text>
                <Text style={styles.text}>{'Nome:       ' + props.contato}</Text>
                <Text style={styles.text}>{'Telefone:   ' + props.telefone}</Text>
            </Cartao>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    itemNaLista: {
        flexDirection: 'column',
        backgroundColor: Cores.corCartao,
        marginBottom: Medidas.eight
    },
    text: {
        fontSize: 15,
        color: '#fff'
    },

});

export default ContatoItem;
