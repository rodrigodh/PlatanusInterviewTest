import { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container } from "./styles";
import { getValidationErrors } from "../../utils/getValidationErrors";
import { api } from "../../services/api";
import { Textarea } from "../../components/Textarea";

interface FormData {
  title: string;
  description: string;
}

export function CreateReport() {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();

  const handleSubmit = useCallback(async (data: FormData) => {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().min(5).required("Titulo necessario!"),
        description: Yup.string().min(10).required("Descrição necessária"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { title, description } = data;

      const response = await api.post("news", {
        title,
        description,
        author: "Cuphead",
      });

      if (response) navigate("/");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Header />

      <h3>Criar Noticia.</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="title" label="Titulo:" placeholder="Digite o nome aqui." />
        <Textarea
          name="description"
          label="Decrição:"
          placeholder="Digite a descrição aqui."
        />
        <Button isSecondary>Enviar</Button>
      </Form>
    </Container>
  );
}
