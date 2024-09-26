const { salasDeAula, getId } = require('../db/database');

class SalaDeAula {
  constructor(descricao, localizacao, capacidade) {
    this.salasdeaulaid = getId(); 
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.capacidade = capacidade;
    this.removido = false;
  }
}

module.exports = SalaDeAula;
