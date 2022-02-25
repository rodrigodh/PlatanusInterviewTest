import { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";

import { getValidationErrors } from "../../utils/getValidationErrors";
import { api } from "../../services/api";
import { Report } from "../../types/report";
import { useToast } from "../../hooks/toast";
import { Container } from "./styles";

interface FormData {
  title: string;
  description: string;
  author: string;
}

export function EditReport() {
  const [report, setReport] = useState({} as Report);
  const [loading, setLoading] = useState(true);
  const formRef = useRef<FormHandles>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const { addToast } = useToast();

  const handleGetReportInfo = useCallback(async () => {
    const response = await api.get(`news/${id}`);
    if (response) {
      setLoading(false);
      setReport(response.data);
      return;
    }

    addToast({
      type: "error",
      title: "Falha ao carregar noticia",
      description: "Verifique sua conexao e tente novamente",
    });
  }, [id, addToast]);

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

        const response = await api.put(`news`, {
          id,
          title,
          description,
          author,
        });

        if (response) {
          addToast({
            type: "sucess",
            title: "Noticia editada com sucesso!",
            description: "A sua noticia foi editada com sucesso",
          });
          navigate("/");
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: "error",
          title: "Erro ao editar noticia",
          description: "Verifique sua conexao e tente novamente.",
        });
      }
    },
    [navigate, id, addToast]
  );

  useEffect(() => {
    handleGetReportInfo();
  }, [handleGetReportInfo]);

  return (
    <Container>
      <Header />

      {loading ? (
        <h3>Carregando...</h3>
      ) : (
        <>
          <h3>Editar Noticia.</h3>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              defaultValue={report.title}
              name="title"
              label="Titulo:"
              placeholder="Digite o nome aqui."
            />

            <Input
              name="author"
              label="Nome do autor:"
              placeholder="Digite o nome do autor aqui."
              defaultValue={report.author}
            />
            <Textarea
              name="description"
              label="Decrição:"
              placeholder="Digite a descrição aqui."
              defaultValue={report.description}
            />
            <footer>
              <Link to={`/report-card/${id}`}>
                <Button>Voltar</Button>
              </Link>

              <Button isSecondary type="submit">
                Atualizar
              </Button>
            </footer>
          </Form>
        </>
      )}
    </Container>
  );
}
