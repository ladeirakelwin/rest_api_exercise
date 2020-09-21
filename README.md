# PROJETO API REST

## Objetivo:

Está API tem como função principal fornecer um CRUD para uma aplicação de To Do List.

## Tecnologias usadas:

- NodeJs
- Express
- Sqlite

## Como instalar o projeto:

### Abra o seu terminal(Linux/Mac)/git bash(Windows) escolha a pasta que deseja clonar o projeto e rode este comando abaixo.

```bash
git clone git@github.com:ladeirakelwin/rest_api_exercise.git
```

### Após o seu projeto ser clonado para sua máquina, abra-o no seu terminal/git bash e rode o comando abaixo para instalar todas as dependências do projeto.

```bash
npm install
```

### Após instalação de todas dependências, você já pode iniciar o servidor para iniciar a API com o comando abaixo com o nodemon.

```bash
npm start
```

### Ou iniciar sem o nodemon com o comando abaixo

```bash
node server.js
```

## Utilização da API

### Para pegar todos os dados do banco, basta criar um endpoint igual o abaixo e testar no insomnia com o verbo GET.

- http://localhost:porta/tarefas
- Exemplo:
  - http://localhost:3000/tarefas

### Para pegar um dado do banco, basta criar um endpoint igual o abaixo, adicionar o id como parâmetro e testar no insomnia com o verbo GET.

- http://localhost:porta/tarefas/id

- Exemplo:
  - http://localhost:3000/tarefas/1

### Para adicionar um dados ao banco, basta criar um endpoint e um corpo do tipo json igual o abaixo e testar no insomnia com o verbo POST.

- Corpo
  - ```javascript
  {
    titulo: "Correr",
    descricao: "todo dia de manhã",
    status: "CONTINUO"
  }
  ```

- http://localhost:porta/tarefas
- Exemplo:
  - http://localhost:3000/tarefas

### Para deletar um dado do banco, basta criar um endpoint igual o abaixo, adicionar o id como parâmetro e testar no insomnia com o verbo DELETE.

- http://localhost:porta/tarefas/id

- Exemplo:
  - http://localhost:3000/tarefas/1