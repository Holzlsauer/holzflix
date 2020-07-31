import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialValues)
  
  function setValue(key, value) {
    // key: nome, descricao, cor
    setValues({
      ...values,
      [key]: value,
    })      
  }

  function handleChange(inputValue) {
    const { getAttribute, value } = inputValue.target;
    setValue(
      getAttribute('name'),
      value
    );
  }
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(initialValues)
      }}>

        <FormField
          label="Nome da Categoria:"
          type="text"
          name="nome"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor:"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categorias, index) => {
          return (
            <li key={`${categorias}${index}`}>
              {categorias.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;