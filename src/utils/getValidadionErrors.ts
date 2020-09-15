import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach(error => {
    /**
     * Criando uma propriedade dentro de validationErrors que está vazio
     */
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
