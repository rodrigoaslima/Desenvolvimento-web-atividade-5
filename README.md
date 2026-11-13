# Atividade 5 — Consulta de CEP

Aplicação de Desenvolvimento Web I para consultar endereços usando JavaScript e a API ViaCEP.

Digite um CEP com oito números, com ou sem hífen, e pressione Enter. A aplicação valida a entrada, mostra o endereço e trata erros de consulta.

## Executar com Node.js

Requer Node.js 24 ou superior. Na pasta do projeto:

```bash
npm install
npm run dev
```

Acesse http://localhost:3001. O arquivo `.env` fornecido define `PORT=3001`.

## Executar com Docker

```bash
docker compose up --build
```

Acesse http://localhost:3002. Após alterar os arquivos, reconstrua a imagem com o mesmo comando.

Para encerrar, pressione Ctrl+C e execute:

```bash
docker compose down
```
