import { ValidationError } from 'yup';

interface UtilValidationError {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): UtilValidationError {
  const validationError: UtilValidationError = {};

  err.inner.forEach((error) => {
    if(error.path){
      validationError[error.path] = error.message;
    }
  });

  return validationError;
}
