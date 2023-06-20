import styled from "styled-components";
import { FaPen, FaTrash, FaTools } from "react-icons/fa";

export const TableContainer = styled.div`
  width: 90%;
  background: var(--containers-bg);
  padding: 5rem;
  border-radius: 15px;
  position: relative;
  background-color: #0e870e;
  box-shadow: 3px 1px 1px 2px black;
  overflow-x: auto;
  min-height: 100vh;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 60rem;
  border: 2px solid;
  background-color: #b4b1b1;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
`;

export const Th = styled.th`
  font-size: 20px;
  border: 2px solid;
  padding: 1px;
  background: #067121c5;

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
  background-color:#c5c1c1;
  border: 2px solid;
  padding: 2px;

  @media only screen and (max-width: 915px){
    padding: 5rem;
    min-width: 20rem;
  }

  input {
    padding: 1.8rem;
    border: 0.2rem solid;
    outline: none;
  }

  :first-child {
    max-width: 10rem;
  }
  svg {
    cursor: pointer;
    font-size: 2.5rem;
  }
`;

export const EditIcon = styled(FaPen)`
  color: #033f03;
  margin-right: 2rem;
`;

export const RemoveIcon = styled(FaTrash)` 
  color: #c40707;
  margin-left: 1rem;
`;
export const ToolsIcon = styled(FaTools)`
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
   border-radius: 10px;
  color: #000000;
  padding: 5px;
  margin-right: 7rem; 
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 6px;
  border: none;
  background-color: var(--invalid-bg);
  border-radius: 10px;
  cursor: pointer;
`;