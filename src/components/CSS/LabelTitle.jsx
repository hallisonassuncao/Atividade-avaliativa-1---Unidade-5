import "./LabelTitle.css";
import React, {useState} from 'react';

export default function LabelTitle({ texto }) {
    // cria um estado inicializado com a prop "texto"
    const [valor, setValor] = useState(texto);
  
    return (
      <label className='labelTitle'>
        {valor}
      </label>
    );
  }