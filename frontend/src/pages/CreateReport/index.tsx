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
import { useToast } from "../../hooks/toast";

interface FormData {
  title: string;
  description: string;
  author: string;
}

export function CreateReport() {
  const formRef = useRef<FormHandles>(null);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().min(5).required("Titulo necessario!"),
          description: Yup.string().min(10).required("Descrição necessária"),
          author: Yup.string().min(1).required("Nome necessário"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { author, title, description } = data;

        const response = await api.post("news", {
          title,
          description,
          author,
        });

        if (response) {
          navigate("/");
          addToast({
            type: "sucess",
            title: "Noticia publicada com sucesso!",
            description: "Sua noticia ja esta visivel",
          });
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: "error",
          title: "Falha ao publicar noticia",
          description: "Verifique a sua conexao e tente novamente",
        });
      }
    },
    [navigate, addToast]
  );

  return (
    <Container>
      <Header />

      <h3>Criar Noticia.</h3>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="title" label="Titulo:" placeholder="Digite o nome aqui." />
        <Input
          name="author"
          label="Nome do autor:"
          placeholder="Digite o nome do autor aqui."
        />
        <Textarea
          name="description"
          label="Decrição:"
          placeholder="Digite a descrição aqui."
        />
        <Button isSecondary type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
}
