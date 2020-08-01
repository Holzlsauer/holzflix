import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    // key: nome, descricao, cor
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(inputValue) {
    setValue(
      inputValue.target.getAttribute('name'),
      inputValue.target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
