import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import FormButtonWrapper from '../../../components/FormButtonWrapper';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm({});
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const menuButton = {
    text: 'Nova categoria',
    path: '/cadastro/categoria',
  };

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  function validateForm(categoriaEscolhida) {
    // eslint-disable-next-line no-useless-escape
    const youtubeRegex = '^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$';
    const errors = {};

    if (!values.url || !values.url.match(youtubeRegex)) {
      errors.url = 'URL inválida';
    }

    if (!values.titulo) {
      errors.titulo = 'Título inválido';
    }

    if (!values.categoria || !categoriaEscolhida) {
      errors.categoria = 'Categoria inválida';
    }

    return !Object.keys(errors).length; // Verifica se o objeto está vazio
  }

  return (
    <PageDefault menuButton={menuButton}>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => (
          categoria.titulo === values.categoria
        ));

        if (validateForm(categoriaEscolhida)) {
          videosRepository.create({
            categoriaId: categoriaEscolhida.id,
            titulo: values.titulo,
            url: values.url,
          })
            .then(() => {
              history.push('/');
            });
        }
      }}
      >
        <FormField
          label="Título do Vídeo: "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL: "
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <FormButtonWrapper>
          <Button type="submit">
            Cadastrar
          </Button>
          <Button onClick={clearForm}>
            Limpar
          </Button>
        </FormButtonWrapper>
      </form>
    </PageDefault>
  );
}

export default CadastroVideo;
