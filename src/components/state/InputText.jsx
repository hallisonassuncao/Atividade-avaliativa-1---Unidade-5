import React, { useState } from 'react';

export default function InputText({ placeholder }) {
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState(false);

  function handleChange(e) {
    const novoValor = e.target.value;
    setValor(novoValor);

    // verifica se está vazio
    setErro(novoValor.trim() === "");
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={valor}
        onChange={handleChange}
      />
      {erro && <p>⚠️ O campo não pode ficar vazio.</p>}
    </div>
  );
}
/*
{erro && <p>⚠️ O campo não pode ficar vazio.</p>}
é uma forma comum em React de renderizar algo condicionalmente.
Se o valor da esquerda (erro) for true, ele retorna o valor da direita (<p>...</p>).
Se for false, ele retorna false (e React simplesmente não renderiza nada).
*/