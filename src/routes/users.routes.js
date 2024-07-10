const { Router } = require('express');
const usersRoutes = Router();
const { getAllUsers, login } = require('../controllers/usersController'); // Importando o controlador

// Função para adicionar um usuário
usersRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body;

  // Aqui você adicionaria a lógica para salvar o usuário no banco de dados
  // Por exemplo, usando Knex para inserir os dados no banco

  response.json({ name, email, password });
});

// Utilizando o controlador getAllUsers para a rota GET
usersRoutes.get('/', getAllUsers);

usersRoutes.post('/login', login);


module.exports = usersRoutes;