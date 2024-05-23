import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Title, Button, Form, Label, Input, ButtonPedidos, Message, Table, TableHead, TableRow, TableCell, ButtonAction } from './components/pedido-estilo';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/produtos')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const produto = { nome: nomeProduto, preco: parseFloat(precoProduto) };

    if (editIndex !== null) {
      const produtoId = produtos[editIndex].id;
      axios.put(`http://127.0.0.1:5000/produtos/${produtoId}`, produto)
        .then(response => {
          const updatedProducts = [...produtos];
          updatedProducts[editIndex] = response.data;
          setProdutos(updatedProducts);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 5000);
          setNomeProduto('');
          setPrecoProduto('');
          setEditIndex(null);
        })
        .catch(error => {
          console.error('Erro ao atualizar produto:', error);
        });
    } else {
      axios.post('http://127.0.0.1:5000/produtos', produto)
        .then(response => {
          setProdutos([...produtos, response.data]);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 5000);
          setNomeProduto('');
          setPrecoProduto('');
        })
        .catch(error => {
          console.error('Erro ao criar produto:', error);
        });
    }
  };

  const handleShowTable = () => {
    setShowTable(!showTable);
  };

  const handleEditProduct = (index) => {
    const produto = produtos[index];
    setNomeProduto(produto.nome);
    setPrecoProduto(produto.preco.toString());
    setEditIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const produtoId = produtos[index].id;
    axios.delete(`http://127.0.0.1:5000/produtos/${produtoId}`)
      .then(() => {
        setProdutos(produtos.filter((_, i) => i !== index));
      })
      .catch(error => {
        console.error('Erro ao deletar produto:', error);
      });
  };

  const formatPrice = (price) => {
    return `$${parseFloat(price).toFixed(2)}`;
  };

  return (
    <Container>
      <Title>Market Simulation</Title>
      
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="nome">Nome:</Label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
          required
        />
        <Label htmlFor="preco">Preço:</Label>
        <Input
          type="number"
          id="preco"
          name="preco"
          value={precoProduto}
          onChange={(e) => setPrecoProduto(e.target.value)}
          required
        />
        <Button type="submit">{editIndex !== null ? 'Atualizar Produto' : 'Cadastrar Produto'}</Button>
      </Form>

      {showMessage && (
        <Message>Produto {editIndex !== null ? 'atualizado' : 'cadastrado'} com sucesso!</Message>
      )}

      <ButtonPedidos onClick={handleShowTable}>
        {showTable ? 'Ocultar Produtos Cadastrados' : 'Mostrar Produtos Cadastrados'}
      </ButtonPedidos>

      {showTable && (
        <Table>
          <TableHead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </TableHead>
          <tbody>
            {produtos.map((produto, index) => (
              <TableRow key={index}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{formatPrice(produto.preco)}</TableCell>
                <TableCell>
                  <ButtonAction onClick={() => handleEditProduct(index)}>Editar</ButtonAction>
                  <ButtonAction onClick={() => handleDeleteProduct(index)}>Excluir</ButtonAction>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}





