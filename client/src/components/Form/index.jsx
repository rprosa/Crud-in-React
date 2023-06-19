import { FormContainer, Form, InputArea, Button } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormComponent = () => {
  const [nome, setNome] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [peso, setPeso] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const listaDeMaterias = JSON.parse(localStorage.getItem("materias")) || [];

    const materias = {
      id: uuidv4().slice(0,5),
      nome: nome,
      cargaHoraria: cargaHoraria,
      peso: peso,
    };

    listaDeMaterias.push(materias);
    localStorage.setItem("materias", JSON.stringify(listaDeMaterias));

    setNome("");
    setCargaHoraria("");
    setPeso("");

    window.location.reload()
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputArea>
          <label nome="nome" htmlFor="nome">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome da matéria"
            minLength={1}
            maxLength={50}
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="cargaHoraria" htmlFor="cargaHoraria">
            CG
          </label>
          <input
            type="text"
            id="cargaHoraria"
            placeholder="Carga horária da matéria"
            minLength={1}
            maxLength={5}
            required
            value={cargaHoraria}
            onChange={(event) => setCargaHoraria(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label nome="peso" htmlFor="peso">
            Peso
          </label>
          <input
            type="text"
            id="peso"
            placeholder="Peso da matéria"
            minLength={1}
            maxLength={2}
            required
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
          />
        </InputArea>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};
