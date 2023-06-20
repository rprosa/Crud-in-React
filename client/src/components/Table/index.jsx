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

  const getPeriodo = () => {
    const listadePeriodos =
      JSON.parse(localStorage.getItem("periodos")) || [];
    setTableData(listadePeriodos);
  };

  useEffect(() => {
    getPeriodo();
  }, []);

  const handleEdit = (periodoId) => {
    setEditingId(periodoId);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleSaveEdit = (periodoId) => {
    const periodoEditado = tableData.find(
      (periodo) => periodo.id === periodoId
    );

    periodoEditado.periodo =
      editedData[periodoId]?.periodo !== undefined
        ? editedData[periodoId]?.periodo
        : periodoEditado.periodo;
    periodoEditado.inicialDate =
      editedData[periodoId]?.inicialDate !== undefined
        ? editedData[periodoId]?.inicialDate
        : periodoEditado.inicialDate;
    periodoEditado.finalDate =
      editedData[periodoId]?.finalDate !== undefined
        ? editedData[periodoId]?.finalDate
        : periodoEditado.finalDate;
    localStorage.setItem("periodos", JSON.stringify(tableData));
    setEditingId(null);
    setEditedData({});
  };

  const handleRemove = (event) => {
    const trElement = event.target.closest("tr");
    const periodoId = trElement.getAttribute("data-id");
    trElement.remove();
    const listadePeriodos =
      JSON.parse(localStorage.getItem("periodos")) || [];
    const updatedListaDePeriodos = listadePeriodos.filter(
      (periodo) => periodo.id != periodoId
    );
    localStorage.setItem(
      "periodos",
     JSON.stringify(updatedListaDePeriodos)
  );
  };

  const handleFieldChange = (periodoId, field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [periodoId]: {
        ...prevData[periodoId],
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
              <Th>Periodo</Th>
              <Th>Data Inicial</Th>
              <Th>Data Final</Th>
              <Th>
                <ToolsIcon />
              </Th>
            </Tr>
          </Thead>
        ) : null}
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((periodo) => (
              <Tr key={periodo.id} data-id={periodo.id}>
                <Td>{periodo.id}</Td>
                <Td>
                  {editingId === periodo.id ? (
                    <input
                      type="number"
                      value={
                        editedData[periodo.id]?.periodo !== undefined
                          ? editedData[periodo.id]?.periodo
                          : periodo.periodo
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          periodo.id,
                          "periodo",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    periodo.periodo || ""
                  )}
                </Td>
                <Td>
                  {editingId === periodo.id ? (
                    <input
                      type="date"
                      value={
                        editedData[periodo.id]?.inicialDate !== undefined
                          ? editedData[periodo.id]?.inicialDate
                          : periodo.inicialDate
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          periodo.id,
                          "inicialDate",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    periodo.inicialDate || ""
                  )}
                </Td>
                <Td>
                  {editingId === periodo.id ? (
                    <input
                      type="date"
                      value={
                        editedData[periodo.id]?.finalDate !== undefined
                          ? editedData[periodo.id]?.finalDate
                          : periodo.finalDate
                      }
                      onChange={(event) =>
                        handleFieldChange(
                          periodo.id,
                          "finalDate",
                          event.target.value
                        )
                      }
                    />
                  ) : (
                    periodo.finalDate || ""
                  )}
                </Td>
                <Td>
                  {editingId === periodo.id ? (
                    <>
                      <SaveButton onClick={() => handleSaveEdit(periodo.id)}>
                        Salvar
                      </SaveButton>
                      <CancelButton onClick={handleCancelEdit}>
                        Cancelar
                      </CancelButton>
                    </>
                  ) : (
                    <>
                      <EditIcon onClick={() => handleEdit(periodo.id)} />
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
