const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const cors = require('cors');

app.use(cors());

app.use('/identity', createProxyMiddleware({ target: 'http://localhost:5000/', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:8080/', changeOrigin: true }));

app.listen(3000);