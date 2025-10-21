import React from 'react';

export default class Labelln extends React.Component {
  constructor(props) {
    super(props);
    // o state inicializa com o valor vindo da prop
    this.state = {
      valor: props.texto
    };
  }

  render() {
    return (
      <>
        {this.state.valor}
      </>
    );
  }
}