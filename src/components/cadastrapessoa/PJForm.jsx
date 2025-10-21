import React from "react";
import { Form, Input, DatePicker, message } from "antd";
function PJForm(){


    return(
        <>
              <Form.Item
                label="CNPJ"
                name="cnpj"
                rules={[{ required: true, message: "Informe o CNPJ!" }]}
              >
                <Input placeholder="00.000.000/0000-00" />
              </Form.Item>
              <Form.Item label="Inscrição Estadual" name={["ie", "numero"]}>
                <Input placeholder="Número da IE" />
              </Form.Item>
              <Form.Item label="Estado" name={["ie", "estado"]}>
                <Input placeholder="UF" maxLength={2} />
              </Form.Item>
              <Form.Item label="Data de Registro" name={["ie", "dataRegistro"]}>
                <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} placeholder="Selecione data de registro" />
              </Form.Item>
            </>
    );
}
export default PJForm;