// src/components/cadastro/Telefone.jsx
import React from "react";

export default function Telefone({ telefone, setTelefone }) {
  const handleChange = (e) => {
    setTelefone({ ...telefone, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-2 border p-4 rounded-lg">
      <h2 className="font-semibold text-lg">Telefone</h2>
      <input name="ddd" placeholder="DDD" onChange={handleChange} className="border p-2 w-full" />
      <input name="numero" placeholder="Número" onChange={handleChange} className="border p-2 w-full" />
      <input name="tipo" placeholder="Tipo (celular, fixo...)" onChange={handleChange} className="border p-2 w-full" />
    </div>
  );
}
