import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import FormButtonWrapper from '../../../components/FormButtonWrapper';
import Button from '../../../components/Button';
import Table from '../../../components/Table';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const { values, handleChange, clearForm } = useForm({});
  const [categorias, setCategorias] = useState([]);
  const head = {
    titulo: 'Nome',
    descricao: 'Descrição',
  };

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

    if (!values.descricao) {
      errors.descricao = 'Campo descrição inválido';
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
            descricao: values.descricao,
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

        <FormButtonWrapper>
          <Button type="submit">
            Cadastrar
          </Button>
          <Button onClick={clearForm}>
            Limpar
          </Button>
        </FormButtonWrapper>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Table data={categorias} head={head} />
    </PageDefault>
  );
}

export default CadastroCategoria;
