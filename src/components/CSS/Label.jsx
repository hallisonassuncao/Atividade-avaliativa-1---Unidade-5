import "./Label.css";
import React, {useState} from 'react';


export default function Label({ texto }) {
  // cria um estado inicializado com a prop "texto"
  const [valor, setValor] = useState(texto);

  return (
    <label className='label'>
      {valor}
    </label>
  );
}