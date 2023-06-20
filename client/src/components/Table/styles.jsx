import styled from "styled-components";
import { FaPen, FaTrash, FaTools } from "react-icons/fa";

export const TableContainer = styled.div`
  width: 90%;
  background: var(--containers-bg);
  padding: 5rem;
  border-radius: 15px;
  position: relative;
  background-color: #1fb31f;
  box-shadow: 3px 1px 1px 2px black;
  overflow-x: auto;
  min-height: 100vh;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 60rem;
  border: 2px solid;
  background-color: #dddada;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  font-size: 20px;
  border: 2px solid;
  padding: 1px;
  background: #1b7a33;

;
  color: #000000;
`;
export const Tr = styled.tr`
  :nth-child(odd) {
    padding: 2px;
    background-color: #dddada;
  }
`;

export const Td = styled.td`
  font-size: 15px;
  text-align: center;
  background-color:#dddada;
  border: 2px solid;
  padding: 2px;

  @media only screen and (max-width: 915px){
    padding: 1rem;
    min-width: 20rem;
  }

  input {
    padding: 0.5rem;
    border: 0.1rem solid;
    outline: none;
  }

  :first-child {
    max-width: 2rem;
  }
  svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;

export const EditIcon = styled(FaPen)` /*edit buttom*/
  color: #0d470d;
  margin-right: 2rem;
`;

export const RemoveIcon = styled(FaTrash)` /*remove buttom*/
  color: #c40707;
  margin-left: 2rem;
`;
export const ToolsIcon = styled(FaTools)` /*tools*/
  color: #000000;
`;


export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1b7a33;

  img {
    width: 30%;
    height: 30%;
    object-fit: contain;
  }

  h2 {
    font-size: clamp(1.4rem, 1.6rem, 2rem);
    color: #000000;
    text-align: center;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const SaveButton = styled.button`
  border-radius:10px solid;
  background-color: #448544;
  margin-right: 3rem;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 6px;
  border: none;
  background-color: var(--invalid-bg);
  border-radius: 10px;
  cursor: pointer;
`;