# FullStack Developer - Cloudia (back-end)

## Aplicação

- O projeto está rodando em produção no seguinte endereço: http://157.245.86.201:3333 .
- O arquivo json exportado do insomnia será enviado por e-mail.

### Localmente

- Instale o npm.
- Realize a instalação das dependências:
  `$ npm install`
- Realize a instalação do docker (O banco está em um container).
  `$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=mysql -d mysql:5.7`
- Realize a instalação do MySQL Workbench e crie uma database chamada 'fstest'. Também há a possibilidade de criar a database via bash.
- No diretório do projeto, rode a migration de client:
  `$ npx sequelize db:migrate`
