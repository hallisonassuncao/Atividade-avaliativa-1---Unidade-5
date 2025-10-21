// src/components/cadastro/Endereco.jsx
import React from "react";

export default function Endereco({ endereco, setEndereco }) {
  const handleChange = (e) => {
    setEndereco({ ...endereco, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-2 border p-4 rounded-lg">
      <h2 className="font-semibold text-lg">Endereço</h2>
      <input name="rua" placeholder="Rua" onChange={handleChange} className="border p-2 w-full" />
      <input name="numero" placeholder="Número" onChange={handleChange} className="border p-2 w-full" />
      <input name="bairro" placeholder="Bairro" onChange={handleChange} className="border p-2 w-full" />
      <input name="cidade" placeholder="Cidade" onChange={handleChange} className="border p-2 w-full" />
      <input name="estado" placeholder="Estado" onChange={handleChange} className="border p-2 w-full" />
      <input name="cep" placeholder="CEP" onChange={handleChange} className="border p-2 w-full" />
    </div>
  );
}
