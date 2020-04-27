import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Medidas from './medidas/index';
import TelaInicio from './telas/home/index';
import Contato from './telas/contato/index';

export default function App() {

  const [contatos, setContatos] = useState([]);
  const [keyContato, setKeyContato] = useState('');
  const [tela, setTela] = useState(1);

  const [contador, setContador] = useState(10);


  const keySelecionado = (keyContato) => {

    setKeyContato(keyContato);
  };

  const telaSelecionada = (contatos, contador) => {
    setContatos(contatos)
    setContador(contador)
    if (tela === 1) {
      setTela(2);
    } else if (tela === 2) {
      setTela(1);
    }
  };


  let conteudo;

  if (tela === 1) {
    conteudo = <TelaInicio
      keyContatoSelecionado={keySelecionado}
      alteraTela={telaSelecionada}
      contatosGeral={contatos}
      cont={contador} />;
  }
  else if (tela === 2) {

    conteudo = <Contato
      editCont={keyContato}
      editContatos={contatos}
      voltar={telaSelecionada}
      cont={contador} />
  }

  return (
    <View style={styles.container} >

      {conteudo}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding: Medidas.twnty,
  }
});