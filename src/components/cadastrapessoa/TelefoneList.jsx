import React, { useState } from "react";
import { Button, Form, Input, Space, List } from "antd";

function TelefoneList(props) {
  const form = props.form;
  const [telefones, setTelefones] = useState([]);
  const [ddd, setDdd] = useState("");
  const [numero, setNumero] = useState("");

  function adicionarTelefone() {
    if (ddd && numero) {
      const novo = { ddd: ddd, numero: numero };
      const atualizados = [...telefones, novo];
      setTelefones(atualizados);
      form.setFieldValue("telefones", atualizados);
      setDdd("");
      setNumero("");
    }
  }

  return (
    <>
      <Space align="baseline">
        <Form.Item label="DDD">
          <Input
            value={ddd}
            onChange={(e) => setDdd(e.target.value)}
            maxLength={2}
            style={{ width: 60 }}
          />
        </Form.Item>
        <Form.Item label="Número">
          <Input
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            maxLength={9}
            style={{ width: 150 }}
          />
        </Form.Item>
        <Button onClick={adicionarTelefone} type="primary">
          Adicionar
        </Button>
      </Space>

      <List
        size="small"
        bordered
        dataSource={telefones}
        renderItem={function (t, index) {
          return (
            <List.Item key={index}>
              ({t.ddd}) {t.numero}
            </List.Item>
          );
        }}
        style={{ marginTop: 10 }}
      />
    </>
  );
}

export default TelefoneList;