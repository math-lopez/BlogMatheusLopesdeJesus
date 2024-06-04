# FIAP Blog

FIAP Blog é uma aplicação web construída com React e Vite, que utiliza Contentful como CMS para gerenciar o conteúdo. Este projeto serve como exemplo de um blog simples com componentes reutilizáveis e navegação entre páginas.

Blog postado: https://rm351250-matheus-lopes-de-jesus.netlify.app/


## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Uso](#uso)
- [Componentes](#componentes)
- [Páginas](#páginas)
- [Integração com Contentful](#integração-com-contentful)

## Tecnologias Utilizadas

- React 18.2.0
- Vite 5.2.0
- React Router Dom 6.23.1
- Bootstrap 5.3.3
- Contentful 10.11.7

## Instalação

1. Clone o repositório
git clone https://github.com/math-lopez/BlogMatheusLopesdeJesus.git

2. Navegue até o diretório do projeto:
cd BlogMatheusLopesdeJesus

3. Instale as dependências:

 
```sh
npm install
```

## Scripts Disponíveis

**DEV:** Inicia o servidor de desenvolvimento.
 

```sh
npm run dev
```

**build:** Compila o projeto para produção.

 
```sh
npm run build
```


## Uso
Para iniciar o servidor de desenvolvimento, execute:
 

```sh
npm run dev
```

## Componentes
Card: Componente para exibir posts ou informações em um formato de cartão.
Footer: Componente de rodapé.
Header: Componente de cabeçalho.
Layout: Componente de layout para estruturação das páginas.

## Páginas
AllPosts: Página que lista todos os posts.
Home: Página inicial.
Post: Página para exibir um post específico.

## Integração com Contentful
Este projeto utiliza Contentful como CMS para gerenciar o conteúdo do blog. Certifique-se de configurar as credenciais de acesso ao Contentful no seu ambiente de desenvolvimento.

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
VITE_CONTENTFUL_SPACE_ID=seu_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=seu_access_token

## Contato
**Matheus Lopes de Jesus - mah.lopesdejesus@gmail.com**
\
**LinkedIn:** https://www.linkedin.com/in/matheus-lopes-de-jesus-09795a286/
\
**Link do Projeto:** https://github.com/math-lopez/BlogMatheusLopesdeJesus