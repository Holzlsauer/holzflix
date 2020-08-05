import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const { values, handleChange, clearForm } = useForm({});
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategorias(categoriesFromServer);
      });
  }, []);

  function validate() {
    const errors = {};

    if (!values.titulo) {
      errors.titulo = 'Campo título inválido';
    }

    if (!values.cor) {
      errors.cor = 'Campo cor inválido';
    }

    return !Object.keys(errors).length; // Verifica se o objeto está vazio
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {' ' /* Blank space between values.title and 'Categoria' */}
        {values.titulo}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        if (validate()) {
          categoriasRepository.create({
            titulo: values.titulo,
            cor: values.cor,
          });

          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm({});
        }
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Button
        as={Link}
        to="/"
        wide="true"
        style={{ marginBottom: 10, textAlign: 'center' }}
      >
        Ir para home
      </Button>
    </PageDefault>
  );
}

export default CadastroCategoria;
