import { FormContainer, Form, InputArea, Button } from "./styles";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormComponent = () => {
  const [periodo, setPeriodo] = useState("");
  const [inicialDate, setInicialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const listadePeriodos = JSON.parse(localStorage.getItem("periodos")) || [];

    const objPeriodo = {
      id: uuidv4().slice(0,5),
      periodo: periodo,
      inicialDate: inicialDate,
      finalDate: finalDate,
    };

    listadePeriodos.push(objPeriodo);
    localStorage.setItem("periodos", JSON.stringify(listadePeriodos));

    setPeriodo("");
    setInicialDate("");
    setFinalDate("");

    window.location.reload()
  };
  
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputArea>
          <label name="periodo" htmlFor="periodo">
            Período
          </label>
          <input
            type="number"
            id="periodo"
            placeholder="Numero do Período"
            min={1}
            max={10}
            required
            value={periodo}
            onChange={(event) => setPeriodo(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label name="inicialDate" htmlFor="inicialDate">
            Data Inicial
          </label>
          <input
            type="date"
            id="inicialDate"
            placeholder="Data Inicial do Periodo"
            required
            value={inicialDate}
            onChange={(event) => setInicialDate(event.target.value)}
          />
        </InputArea>
        <InputArea>
          <label name="finalDate" htmlFor="finalDate">
            Data Final
          </label>
          <input
            type="date"
            id="finalDate"
            placeholder="Data Final do Periodo"
            required
            value={finalDate}
            onChange={(event) => setFinalDate(event.target.value)}
          />
        </InputArea>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  );
};
