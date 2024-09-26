const express = require('express');
const router = express.Router();
const SalaDeAula = require('../models/salasDeAulaModel');
const { salasDeAula } = require('../db/database');

// Get all salas de aula
router.get('/', (req, res) => {
  const activeSalas = salasDeAula.filter(sala => !sala.removido);
  res.json(activeSalas);
});

// Get sala de aula by ID
router.get('/:id', (req, res) => {
  const sala = salasDeAula.find(sala => sala.salasdeaulaid === parseInt(req.params.id) && !sala.removido);
  if (!sala) return res.status(404).send('Sala de aula não encontrada.');
  res.json(sala);
});

// Insert new sala de aula
router.post('/', (req, res) => {
  const { descricao, localizacao, capacidade } = req.body;
  const novaSala = new SalaDeAula(descricao, localizacao, capacidade);
  salasDeAula.push(novaSala);
  res.status(201).json(novaSala);
});

// Update sala de aula
router.put('/:id', (req, res) => {
  const sala = salasDeAula.find(sala => sala.salasdeaulaid === parseInt(req.params.id));
  if (!sala || sala.removido) return res.status(404).send('Sala de aula não encontrada.');

  const { descricao, localizacao, capacidade } = req.body;
  sala.descricao = descricao || sala.descricao;
  sala.localizacao = localizacao || sala.localizacao;
  sala.capacidade = capacidade || sala.capacidade;

  res.json(sala);
});

// Soft delete sala de aula
router.delete('/:id', (req, res) => {
  const sala = salasDeAula.find(sala => sala.salasdeaulaid === parseInt(req.params.id));
  if (!sala) return res.status(404).send('Sala de aula não encontrada.');

  sala.removido = true;
  res.json(sala);
});

module.exports = router;
