import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function create(objetoCategoria) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoCategoria),
  })
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();

        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

export default {
  create,
  getAll,
  getAllWithVideos,
};
