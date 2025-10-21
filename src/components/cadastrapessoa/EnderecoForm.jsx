import React, { useState } from "react";
import { Form, Input, Row, Col, Select } from "antd";
import axios from "axios";

const { Option } = Select;

function EnderecoForm({ form }) {
  const [cepError, setCepError] = useState(null);

  const handleCepChange = async (e) => {
    let cep = e.target.value.replace(/\D/g, "");
    if (cep.length > 10) cep = cep.slice(0, 10);

    form.setFieldsValue({
      endereco: {
        ...form.getFieldValue("endereco"),
        cep,
      },
    });

    // Limpa erro ao digitar
    if (cepError) setCepError(null);

    if (cep.length === 8) {
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        if (data.erro) {
          form.setFieldsValue({
            endereco: {
              ...form.getFieldValue("endereco"),
              logradouro: "",
              bairro: "",
              cidade: "",
              uf: "",
            },
          });
          setCepError("CEP não encontrado.");
          return;
        }

        setCepError(null); // Remover o erro se encontrar
        form.setFieldsValue({
          endereco: {
            ...form.getFieldValue("endereco"),
            logradouro: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            uf: data.uf || "",
          },
        });
      } catch {
        setCepError("Erro ao buscar o CEP.");
      }
    }
  };

  return (
    <>
      <Form.Item
        label="CEP"
        name={["endereco", "cep"]}
        rules={[{ required: true, message: "Informe o CEP!" }]}
        validateStatus={cepError ? "error" : ""}
        help={cepError || ""}
      >
        <Input
          placeholder="Digite o CEP"
          maxLength={8}
          onChange={handleCepChange}
          inputMode="numeric"
        />
      </Form.Item>

      <Form.Item
        label="Logradouro"
        name={["endereco", "logradouro"]}
        rules={[{ required: true, message: "Informe o logradouro!" }]}
      >
        <Input placeholder="Rua / Avenida" />
      </Form.Item>

      <Form.Item
        label="Bairro"
        name={["endereco", "bairro"]}
        rules={[{ required: true, message: "Informe o bairro!" }]}
      >
        <Input placeholder="Bairro" />
      </Form.Item>

      <Row gutter={8}>
        <Col span={13}>
          <Form.Item
            label="Cidade"
            name={["endereco", "cidade"]}
            rules={[{ required: true, message: "Informe a cidade!" }]}
          >
            <Input placeholder="Cidade" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item
            label="UF"
            name={["endereco", "uf"]}
            rules={[{ required: true, message: "Informe a UF!" }]}
          >
            <Input placeholder="UF" maxLength={2} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Região"
            name={["endereco", "regiao"]}
            rules={[{ required: true, message: "Selecione a região!" }]}
          >
            <Select placeholder="Selecione">
              <Option value="Norte">Norte</Option>
              <Option value="Nordeste">Nordeste</Option>
              <Option value="Centro-Oeste">Centro-Oeste</Option>
              <Option value="Sudeste">Sudeste</Option>
              <Option value="Sul">Sul</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default EnderecoForm;
