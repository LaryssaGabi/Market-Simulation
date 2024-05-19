
import React, { useState } from 'react';
import { Container, Title, Button, Form, Label, Input, ButtonPedidos, Message, Table, TableHead, TableRow, TableCell, ButtonAction } from './components/pedido-estilo';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 10.00 },
    { id: 2, nome: 'Produto 2', preco: 20.00 },
    { id: 3, nome: 'Produto 3', preco: 30.00 }
  ]);
  const [showMessage, setShowMessage] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // Índice do produto em edição

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const produto = { nome: nomeProduto, preco: parseFloat(precoProduto) };

    if (editIndex !== null) {
      // Atualiza o produto existente
      const updatedProducts = [...produtos];
      updatedProducts[editIndex] = { ...updatedProducts[editIndex], ...produto };
      setProdutos(updatedProducts);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      setNomeProduto('');
      setPrecoProduto('');
      setEditIndex(null);
    } else {
      // Adiciona um novo produto
      setProdutos([...produtos, { id: produtos.length + 1, ...produto }]);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
      setNomeProduto('');
      setPrecoProduto('');
    }
  };

  const handleShowTable = () => {
    setShowTable(!showTable); // Alterna entre mostrar e ocultar a tabela
  };

  const handleEditProduct = (index) => {
    // Preenche os campos do formulário com os dados do produto em edição
    const produto = produtos[index];
    setNomeProduto(produto.nome);
    setPrecoProduto(produto.preco.toString());
    setEditIndex(index);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = produtos.filter((_, i) => i !== index);
    setProdutos(updatedProducts);
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

