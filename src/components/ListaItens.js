import React, { Component } from 'react';
import {
  Platform,
  ScrollView
} from 'react-native';
import axios from 'axios'
import Itens from './Itens';

export default class ListaItens extends Component<{}> {

	constructor(props) {
		super(props);

		this.state = { listaItems: [] };
	}

  componentWillMount() {
  	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
  		.then(response => { this.setState({ listaItems: response.data }); })
  		.catch(() => { console.log('Erro ao carregar os dados'); });	
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
      	{ this.state.listaItems.map(item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}
