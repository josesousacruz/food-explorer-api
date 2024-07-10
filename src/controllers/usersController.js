const db = require('../database/knex/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAllUsers = async (req, res) => {
    try {
        const usuarios = await db('users'); // Certifique-se de que 'users' é o nome correto da tabela
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
}; 

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const user = await db('users').where({ email }).first();

        if (!user) {
            return res.status(400).json({ message: 'Email ou senha inválidos.' });
        }

        if (user.senha !== senha) {
            return res.status(400).json({ message: 'Email ou senha inválidos.' });
        }
        // const validPassword = await bcrypt.compare(senha, user.senha);
        // if (!validPassword) {
        //     return res.status(400).json({ message: 'Email ou senha inválidos.' });
        // }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login.' });
    }
};


module.exports = { getAllUsers, login }; // Corrigido para getAllUsers