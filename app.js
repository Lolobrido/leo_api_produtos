require('dotenv').config();
const express = require('express'); 
const path = require('path');
const app = express(); 

const PORT = process.env.PORT || 3000;

app.use(express.json()); 

// Serve os arquivos da pasta public
app.use(express.static(path.join(__dirname, 'src', 'public'))); 

const produtosRoutes = require('./src/routes/produtosRoutes'); 
app.use('/produtos', produtosRoutes); 

// ROTA HOME (Certifique-se que o arquivo chama home.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'home.html'));
});

// ROTA CADASTRO
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'cadastro.html'));
});

app.listen(PORT, () => { 
    console.log(`🚀 Servidor em: http://localhost:${PORT}`);
});