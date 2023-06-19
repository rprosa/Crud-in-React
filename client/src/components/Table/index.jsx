import { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  NotFoundContainer,
  EditIcon,
  RemoveIcon,
  ToolsIcon,
  CancelButton,
  SaveButton,
} from "./styles";

export const TableComponent = () => {
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  const getMaterias = () => {
    const listaDeMaterias =
      JSON.parse(localStorage.getItem("materias")) || [];
    setTableData(listaDeMaterias);
  };

  useEffect(() => {
    getMaterias();
  }, []);

  const handleEdit = (materiaId) => {
    setEditingId(materiaId);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSaveEdit = (materiaId) => {
    const materiaEditada = tableData.find(
      (materia) => materia.id === materiaId
    );

    materiaEditada.nome =
      editedData[materiaId]?.nome !== undefined
        ? editedData[materiaId]?.nome
        : materiaEditada.nome;
    materiaEditada.cargaHoraria =
      editedData[materiaId]?.cargaHoraria !== undefined
        ? editedData[materiaId]?.cargaHoraria
        : materiaEditada.cargaHoraria;
    materiaEditada.peso =
      editedData[materiaId]?.peso !== undefined
        ? editedData[materiaId]?.peso
        : materiaEditada.peso;
    localStorage.setItem("materias", JSON.stringify(tableData));
    setEditingId(null);
    setEditedData({});
  };

  const handleRemove = (event) => {
    const trElement = event.target.closest("tr");
    const materiaId = trElement.getAttribute("data-id");
    trElement.remove();
    const listaDeMaterias =
      JSON.parse(localStorage.getItem("materias")) || [];
    const updatedListaDeMaterias = listaDeMaterias.filter(
      (materia) => materia.id !== materiaId
    );
    localStorage.setItem(
      "materias",
      JSON.stringify(updatedListaDeMaterias)
    );
  };

  const handleFieldChange = (materiaId, field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [materiaId]: {
        ...prevData[materiaId],
        [field]: value === "" ? null : value,
      },
    }));
  };

  return (
    <TableContainer>
      <Table>
        {tableData.length > 0 ? (
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>CG</Th>
              <Th>Peso</Th>
              <Th>
                <ToolsIcon />
              </Th>
            </Tr>
          </Thead>
        ) : null}
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((materia) => (
              <Tr key={materia.id} data-id={materia.id}>
                <Td>{materia.id}</Td>
                <Td>
                  {editingId === materia.id ? (
                    <input
                      type="text"
                      value={
                        editedData[materia.id]?.nome !== undefined
                          ? editedData[materia.id]?.nome
                          : materia.nome
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          materia.id,
                          "nome",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    materia.nome || ""
                  )}
                </Td>
                <Td>
                  {editingId === materia.id ? (
                    <input
                      type="text"
                      value={
                        editedData[materia.id]?.cargaHoraria !== undefined
                          ? editedData[materia.id]?.cargaHoraria
                          : materia.cargaHoraria
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          materia.id,
                          "cargaHoraria",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    materia.cargaHoraria || ""
                  )}
                </Td>
                <Td>
                  {editingId === materia.id ? (
                    <input
                      type="text"
                      value={
                        editedData[materia.id]?.peso !== undefined
                          ? editedData[materia.id]?.peso
                          : materia.peso
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          materia.id,
                          "peso",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    materia.peso || ""
                  )}
                </Td>
                <Td>
                  {editingId === materia.id ? (
                    <>
                      <SaveButton onClick={() => handleSaveEdit(materia.id)}>
                        Salvar
                      </SaveButton>
                      <CancelButton onClick={handleCancelEdit}>
                        Cancelar
                      </CancelButton>
                    </>
                  ) : (
                    <>
                      <EditIcon onClick={() => handleEdit(materia.id)} />
                      <RemoveIcon onClick={(event) => handleRemove(event)} />
                    </>
                  )}
                </Td>
              </Tr>
            ))
          ) : (
            <NotFoundContainer>
              <img src="github_gif.gif" alt="Gif do mascote do Github" />
              <h2>Nenhum dado encontrado.</h2>
            </NotFoundContainer>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};
