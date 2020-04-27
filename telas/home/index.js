import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ContatoItem from '../../components/listagem/index';
import ContatoInput from '../../components/cadastro/index';
import Medidas from '../../medidas/index';


const TelaInicio = (props) => {

    const [contatos, setContatos] = useState(props.contatosGeral);
    const [contadorContato, setContadorContato] = useState(props.cont);
    const [contato, setContato] = useState([]);


    const adicionarContato = (contato, telefone) => {
        setContatos((contatos) => {
            setContadorContato(contadorContato + 2);
            return [...contatos, { key: contadorContato.toString(), cont: contato, tel: telefone }];
        });
    }

    const removerContato = (keyASerRemovida) => {
        setContatos(contatos => {
            const filter = contatos.filter(contato => contato.key !== keyASerRemovida);

            return filter;

        });
    };

    const contatoSelecionado = (keyContato) => {

        props.keyContatoSelecionado(keyContato);
        props.alteraTela(contatos, contadorContato);

    }

    return (
        <View style={styles.container} >
            <View><Text style={styles.titulo}>Cadastro de contatos</Text></View>
            <ContatoInput onAdicionarContato={adicionarContato} />
            <View>
                <View><Text style={styles.titulo}>Lista dos contatos</Text></View>
                <FlatList
                    data={contatos}
                    renderItem={contato => (
                        <ContatoItem
                            keys={contato.item.key}
                            contato={contato.item.cont}
                            telefone={contato.item.tel}
                            onDelete={removerContato}
                            contSelecionado={contatoSelecionado}
                        />)}
                >
                </FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: Medidas.fifty,
    },

    titulo: {
        fontSize: Medidas.twenty_five,
        marginBottom: Medidas.twenty
    }
});


export default TelaInicio;
