const db = require('../database/knex/index');

const addIngrediente = async (req, res) => {
  const { nome } = req.body;

  try {
    await db('ingredientes').insert({ nome });
    res.status(201).json({ message: 'Ingrediente adicionado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar ingrediente' });
  }
};

module.exports = { addIngrediente };
