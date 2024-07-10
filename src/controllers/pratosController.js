const db = require('../database/knex/index');

const addPrato = async (req, res) => {
    const { titulo, descricao, valor, urlImg, ingredientes } = req.body; // ingredientes é um array de IDs de ingredientes

    try {
        // Inicia uma transação para garantir que ambas as inserções sejam atômicas
        await db.transaction(async trx => {
            // Insere o prato na tabela 'pratos'
            const [pratoId] = await trx('pratos').insert({ titulo, descricao, valor, urlImg }, 'id');

            // Prepara as inserções na tabela 'pratos_ingredientes'
            const pratoIngredientes = ingredientes.map(ingredienteId => ({
                prato_id: pratoId,
                ingrediente_id: ingredienteId
            }));

            // Insere as relações na tabela 'pratos_ingredientes'
            await trx('pratos_ingredientes').insert(pratoIngredientes);
        });

        res.status(201).json({ message: 'Prato adicionado com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar prato' });
    }
};

module.exports = { addPrato };
