import React, { useState } from 'react';

export default function InputPassword({ placeholder }) {
  const [senha, setSenha] = useState("");

  function handleChange(e) {
    setSenha(e.target.value);
  }

  return (
    <div>
      <input
        type="password"
        placeholder={placeholder}
        value={senha}
        onChange={handleChange}
      />
      <p>Senha digitada: {senha}</p>
    </div>
  );
}