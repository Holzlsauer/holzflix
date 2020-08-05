import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(inputValue) {
    const fieldName = inputValue.target.getAttribute('name');
    const { value } = inputValue.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
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
