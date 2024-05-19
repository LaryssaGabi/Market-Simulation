"# api_flask_sqlite" 

## Instale as dependências:
Execute o seguinte comando no seu terminal para instalar as bibliotecas necessárias:

```bash
pip install flask flask-sqlalchemy flask-cors
```

## Execute a API:
No terminal, navegue até o diretório onde o arquivo app.py está localizado e execute:

```bash
python app.py
```

Você verá uma saída indicando que o servidor Flask está rodando, geralmente em http://127.0.0.1:5000.

## Teste a API:
Você pode usar ferramentas como Insomnia, ou até mesmo Invoke-RestMethod no terminal para testar as rotas da API (Foi o que funcionou no meu). Aqui estão alguns exemplos de como você pode testar cada uma das rotas:

1. Listar todos os produtos

```bash
Invoke-RestMethod -Uri http://127.0.0.1:5000/produtos -Method Get
```


2. Obter um produto específico

Substitua <produto_id> pelo ID do produto que você quer obter (por exemplo, 1).

```bash
Invoke-RestMethod -Uri http://127.0.0.1:5000/produtos/<produto_id> -Method Get
```


3. Criar um novo produto

```bash
Invoke-RestMethod -Uri http://127.0.0.1:5000/produtos -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"nome": "Produto Teste", "preco": 10.99}'
```


4. Atualizar um produto

```bash
Invoke-RestMethod -Uri http://127.0.0.1:5000/produtos/<produto_id> -Method Put -Headers @{"Content-Type"="application/json"} -Body '{"nome": "Produto Atualizado", "preco": 12.99}'
```

5. Deletar um produto
Substitua <produto_id> pelo ID do produto que você quer deletar (por exemplo, 1).

```bash
Invoke-RestMethod -Uri http://127.0.0.1:5000/produtos/1 -Method Delete
```