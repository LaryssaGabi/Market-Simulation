import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 94vh;

`;

export const Title = styled.h1`
 margin-bottom: 20px;
  color: #000;
  font-size: 28px;
  padding: 10px 20px;
  border-radius: 5px;
  text-shadow: 0 0 5px #153ab3, 0 0 10px #153ab3, 0 0 20px #153ab3, 0 0 40px #283a75;

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 24px;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #8caccd;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
export const ButtonPedidos = styled.button`
  margin-top: 50px; 
  width: 400px;
  background-color: #8caccd;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Message = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  font-size: 16px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
`;

export const TableHead = styled.thead`
  background-color: #8caccd;
  color: white;
  font-size: 23px;
`;

export const TableRow = styled.tr`
  text-align: center;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
   padding: 10px;
  border: 1px solid #ccc;
  width: 170px;

`;

export const ButtonAction = styled.button`
  margin: 0 50px 5px;
  width: 120px;
  background-color: #8caccd;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
