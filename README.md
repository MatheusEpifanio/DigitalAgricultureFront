# DigitalAgricultureFront

# Frontend - Sistema de Gerenciamento de talhões

- **Cadastro e Autenticação de Usuários**:
  - Registro e login de usuários com JWT.
- **Cadastro de Talhões**:
  - Cadastro de talhões.
- **Registro de Atividades**:
  - Registrar atividades dos talhões.
 

## Pré-requisitos
- [Git](https://git-scm.com/) (opcional, para clonar o repositório)
- [Docker](https://www.docker.com)

### 1. Clone o Repositório ou baixe o zip

```Terminal(para o windowns use o powershell)
git clone https://github.com/MatheusEpifanio/DigitalAgricultureFront.git
```
### 2. Entre na pasta raiz do projeto pelo terminal 
cd digital-agriculture

### 2.1. execute os seguintes comandos
irá subir um container com aplicação
docker compose -f 'docker-file-compose.yml' up -d --build

caso necessário rode para derrubnar o container no docker
docker compose -f 'docker-file-compose.yml' down 

Sistema estará rodando em `http://localhost:80`.
