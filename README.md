# Casa de Rações Martin de Sá — projeto Vite com Rollup WebAssembly

## Requisitos
- Node.js 18 ou superior
- npm

## Instalação limpa
Se você já tentou instalar o projeto anteriormente, apague primeiro as pastas `node_modules` e o arquivo `package-lock.json` dentro desta pasta.

Abra o terminal **na pasta que contém este package.json** e execute:

```bash
npm install
npm run dev
```

Abra o endereço local mostrado pelo Vite, normalmente `http://localhost:5173/`.

## Por que esta versão é diferente?
O `package.json` usa um override para substituir o Rollup nativo pelo pacote oficial `@rollup/wasm-node`, que executa Rollup via WebAssembly e não depende do arquivo binário `.node` específico do Windows. Isso pode contornar bloqueios direcionados ao módulo nativo do Rollup, mas não garante execução caso a política da máquina também bloqueie pacotes ou módulos WebAssembly.

## Outros comandos
```bash
npm run build
npm run preview
```
