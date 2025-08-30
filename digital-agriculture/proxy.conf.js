module.exports = [
  {
    context: ["/api"], // só proxia rotas que começam com /api
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    // Se o SEU backend NÃO tiver /api no path e você chama /api no front, descomente:
    // pathRewrite: { '^/api': '' },
  },
];
