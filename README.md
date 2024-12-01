# esqueleto-api-nestjs

## ✏️ - Personalizando

Para personalizar o projeto, basta alterar o arquivo `docker-compose.yml` para conter o nome do projeto desejado, alterando após nomes simples, como: `api` para `api_nome_do_projeto`. E alterar o arquivo `inicio.sh` para que o nome da rede criada seja o mesmo do projeto.

Também é necessário alterar o arquivo `package.json` para que o nome do projeto seja o mesmo do projeto.

Além disso o arquivo `.env` deve ser alterado para que o nome do banco de dados seja o mesmo do projeto. Bem como quaisquer ligações necessárias, como: AWS, Auth0, Sentry, New Relic, etc.

## 🔫 - Executando o projeto

### 😀 Como executar o projeto pela primeira vez

```bash
sh inicio.sh
```

### 🗿 Como executar o projeto após a primeira vez

```bash
docker-compose up
```

## 💻 - Processo de desenvolvimento

As features estão na pasta `src/funcionalidades`. De modo que seus arquivos seguem o seguinte padrão:

> `[nome].[tipo].ts` <br>
> Ex: `exemplo.controller.ts`

#### Princípios:

- O desenvolvimento é feito usando DDD, portanto cada pasta se refere a um domínio da aplicação, e é utilizado princípio da separação de responsabilidades. Que reflete na estrutura dos métodos de todas as classes. Cada método deve ter apenas uma responsabilidade, e cada classe deve ter apenas uma responsabilidade.

- O repositório como um todo é feito em Português no caso de sistemas que não sejam de domínio internacional. Caso contrário, o repositório é feito em Inglês.

### 🛠️ Como criar uma funcionalidade nova

Para criar uma nova funcionalidade, basta executar o comando:

```bash
docker exec -it [nome_do_container] bash
```

E dentro do container, executar o comando:

```bash
nest g module [nome_da_feature]
```

Entretanto os arquivos automaticamente criados não seguem o padrão do projeto. Para isso, é necessário seguir dois passos:

1. Mova a pasta criada para a pasta `src/funcionalidades` do projeto.
2. Mova os arquivos de teste dentro da pasta gerada para uma nova pasta chamada `teste`, dentro da pasta da funcionalidade.

> #### Para is detalhes do uso do NestJS, veja a feature `exemplo`.

### 🚨 Como executar testes

Para executar os testes, basta executar o comando:

```bash
docker exec -it [nome_do_container] bash
```

E dentro do container, executar o comando:

```bash
npm run test
```

## Migrations

As migrations são criadas na pasta `src/migrations` que contém um arquivo de exemplo.
Para que as migrations sejam executadas, é necessário alterar [este arquivo](src/configuracoes/postgres/conexao.ts), mudando a propriedade `synchronize` para `false`.

### 🛠️ Contruindo migrations

```bash
docker exec -it [nome_do_container] bash
```

#### 🖌️ - Para **criar** uma nova migration, execute o comando:

```bash
npm run migration:create --name=[nome_da_migration]
```

#### ✅ - Para **executar** as migrations, execute o comando:

```bash
npm run migration:run
```

#### ❌ - Para **reverter** a última migration, execute o comando:

```bash
npm run migration:revert
```

#### 👀 - Para **ver o status** das migrations, execute o comando:

```bash
npm run migration:show
```
