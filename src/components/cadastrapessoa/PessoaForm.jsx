import React, { useState, useEffect } from "react";
import { Form, Input, Button, Radio, message } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import EnderecoForm from "./EnderecoForm";
import TelefoneList from "./TelefoneList";
import PFForm from "./PFForm";
import PJForm from "./PJForm";
import "./pessoaform.css";

function PessoaForm() {
  const [tipo, setTipo] = useState("PF");
  const [form] = Form.useForm();
  const [mostrarTopo, setMostrarTopo] = useState(false);

  function onFinish(values) {
    console.log("📋 Dados submetidos:", values);
    message.success("Dados armazenados localmente (modo formulário).");
  }

  function onChangeTipo(e) {
    const novoTipo = e.target.value;
    setTipo(novoTipo);
    const valoresAtuais = form.getFieldsValue();
    form.resetFields();
    form.setFieldsValue({ ...valoresAtuais, tipo: novoTipo });
  }

  useEffect(() => {
    const verificarScroll = () => {
      setMostrarTopo(window.scrollY > 200);
    };
    window.addEventListener("scroll", verificarScroll);
    return () => window.removeEventListener("scroll", verificarScroll);
  }, []);

  const voltarAoTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-scroll">
      <div className="form-container">
        <h2>Cadastro de {tipo === "PF" ? "Pessoa Física" : "Pessoa Jurídica"}</h2>

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Tipo de Pessoa"
            name="tipo"
            initialValue="PF"
            style={{ marginBottom: 10 }}
          >
            <Radio.Group onChange={onChangeTipo}>
              <Radio value="PF">Pessoa Física</Radio>
              <Radio value="PJ">Pessoa Jurídica</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: "Informe o nome!" }]}
          >
            <Input placeholder="Nome completo ou razão social" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Informe o e-mail!" },
              { type: "email", message: "Formato de e-mail inválido!" },
            ]}
          >
            <Input placeholder="exemplo@email.com" />
          </Form.Item>

          <EnderecoForm form={form} /> {/* 👈 IMPORTANTE! Passar o form aqui */}
          <TelefoneList form={form} />

          {tipo === "PF" ? <PFForm /> : <PJForm />}

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Salvar
            </Button>
          </Form.Item>
        </Form>
      </div>

      <button
        className={`scroll-top-button ${mostrarTopo ? "" : "hidden"}`}
        onClick={voltarAoTopo}
        title="Voltar ao topo"
      >
        <ArrowUpOutlined />
      </button>
    </div>
  );
}

export default PessoaForm;
