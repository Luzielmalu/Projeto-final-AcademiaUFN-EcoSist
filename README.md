# Projeto EcoSist

![Eco (3)](https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/fa2f46b8-3459-4059-84c8-ac6b919fcdc3)

A EcoSist, é uma aplicação web desenvolvida com o objetivo de sanar um problema de uma empresa prestadora de serviços de coleta de óleo e gordura vegetal usados. A empresa faz a reciclagem desse óleo, e destina para algumas indústrias de ração animal e fabricação de sabão.

## Visão geral

As coletas são feitas em residências e comércios. Problema: a empresa não dispor para os usuários doadores do óleo, um sistema para registro, cadastro e agendamentos das coletas.
E também, a empresa não ter o controle desses cadastros, agendamentos e coletas. A aplicação web seria disponibilizada aos usuários, através de um link pelo atendimento do WhatsApp. Podendo ser acessada pelo smartphone ou desktop.

## Funcionalidades principais

* Registro
* Login
* Cadastro
* Agendamento
* Lista dos cadastros
* Lista dos agendamentos
* Atualização do status das coletas

## Tecnologias utilizadas

![Back-End Badge](https://img.shields.io/badge/Back--End-blue?style=flat&logo=server&logoColor=white&labelColor=black)
* IDE:  Eclipse 
* Linguagen: Java
* Spring Boot com Maven, JPA + Hibernate
* Spring Security
* JWT Security
* Lombok
* Swagger
* Tomcat
* Banco de dados MySql
  
![Front-End Badge](https://img.shields.io/badge/Front--End-orange?style=flat&logo=html5&logoColor=white&labelColor=black)
* IDE: VsCode
* Linguagem: TypeScript
* Html e CSS
* Angular Framework
* Angular Material
* Google Material

## Diagrama de classes
```mermaid
classDiagram
    class User {
        + id: Long
        + nome: String
        + login: String
        + password: String
        + role: UserRole
    }

    class Cadastro {
        + id: Long
        + nomeCompleto: String
        + dataNascimento: String
        + cpfCnpj: String
        + telefone: String
        + email: String
        + cep: String
        + enderecoCompleto: String
        + bairroCidEst: String
        + tipoEndereco: String
        + pontoReferencia: String
        + observacao: String
    }

    class Agendamento {
        + id: Long
        + data: String
        + horario: String
        + cpfCnpj: String
        + enderecoColeta: String
        + quantOleo: String
        + statusColeta: String
        + user_id: User
        + cadastro_id: Cadastro
    }

    class UserRole {
        + role: String
    }

    User "1" --> "1" UserRole : role
    User "1" --> "0..n" Agendamento : agendamentos
    User "1" --> "1" Cadastro
    Agendamento "0..n" --> "1" User: user
   ```

## Sitemap

![Projeto (2)](https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/360a99f7-4ab9-4b34-b754-3dd2b4bda55e)


## Link do design feito no Figma

https://www.figma.com/file/0eOyVimV1vR32E5KDu69Dc/Projeto?type=design&node-id=20-19&mode=design&t=XrbEuCnhXNbEOhXp-0


## Responsividade da aplicação

<img width="256" alt="image" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/1473c6ec-45c4-4640-843f-c7b6c4a60ab3">

<img width="229" alt="image" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/e750ac61-adf7-40cc-91a7-ae1626bbde2c">

<img width="261" alt="image" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/0e062bc2-1dc8-4bfa-ae27-51f217e1811c">

<img width="594" alt="ImagemNot" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/55a0edeb-d072-41b3-bc64-debcd80df3d1">

<img width="582" alt="ImagemNot2" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/22f23c23-2546-4f1f-b991-49b7a543479e">

<img width="592" alt="ImagemNot3" src="https://github.com/Luzielmalu/Projeto-final-AcademiaUFN-EcoSist/assets/129329993/0a76f9ca-fa6c-4e11-92d0-f3cb6da838a2">



## Pessoas contribuidoras

Colegas da Academia Java UFN:
 * Osvaldo Ribeiro
 * Lucas Batista
 * Rafael Lins
 
Professores da Academia Java UFN: 
 * Gabriel Flores
 * Luan Vieira

Desenvolvedora:
* Luzielma J da Silva
