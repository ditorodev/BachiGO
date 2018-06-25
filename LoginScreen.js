import React from 'react';
import {TextInput, Text} from 'react-native';

export default class LogInInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        nombreUsuario : 'prueba',
    }
  }
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText= {(text) => this.setState({text})}
        value={this.state.nombreUsuario}
      />
    )
  }
}
