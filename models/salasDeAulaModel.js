const { salasDeAula, getId } = require('../db/database');

class SalaDeAula {
  constructor(descricao, localizacao, capacidade) {
    this.salasdeaulaid = getId(); // Chama a função para obter um novo ID
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.capacidade = capacidade;
    this.removido = false;
  }
}

module.exports = SalaDeAula;
