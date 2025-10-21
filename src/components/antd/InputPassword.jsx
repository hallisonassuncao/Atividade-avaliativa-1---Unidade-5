// src/components/InputPassword.jsx
import React, { useState } from "react";
import { Input, Typography } from "antd";

const { Text } = Typography;

export default function InputPassword({ placeholder }) {
  const [senha, setSenha] = useState("");

  return (
    <div>
      <Input.Password
        placeholder={placeholder}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        size="large"
      />
      {/*senha && (
        <Text type="secondary" italic style={{ display: "block", marginTop: 6 }}>
          Senha digitada: {senha}
        </Text>
      )*/}
    </div>
  );
}