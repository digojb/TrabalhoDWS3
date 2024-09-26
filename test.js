const axios = require('axios');

async function testarAPIs() {
  const apiBase = 'http://localhost:3000/api/salas';

  // Inserir uma nova sala
  const novaSala = {
    descricao: 'Sala 102',
    localizacao: 'Bloco A',
    capacidade: 25
  };

  try {
    // Inserindo a sala
    const resInsert = await axios.post(apiBase, novaSala);
    console.log('Sala inserida:', resInsert.data);

    // Obtendo todas as salas
    const resGetAll = await axios.get(apiBase);
    console.log('Todas as salas:', resGetAll.data);

    // Obtendo uma sala por ID
    const resGetById = await axios.get(`${apiBase}/1`);
    console.log('Sala 1:', resGetById.data);

    // Atualizando a sala
    const updatedSala = {
      descricao: 'Sala 102 Atualizada',
      localizacao: 'Bloco C',
      capacidade: 35
    };

    const resUpdate = await axios.put(`${apiBase}/1`, updatedSala);
    console.log('Sala atualizada:', resUpdate.data);

    // Deletando a sala
    const resDelete = await axios.delete(`${apiBase}/1`);
    console.log('Sala deletada:', resDelete.data);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

testarAPIs();
