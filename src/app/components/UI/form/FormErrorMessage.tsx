import { useFormContext } from 'react-hook-form'
import { styled } from 'styled-components';

interface FormErrorMessageProps {
  field: string
}

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  
  return result
};

export function FormErrorMessage({ field }: FormErrorMessageProps) {
  const { formState: { errors } } = useFormContext()

  const fieldError = get(errors, field)
    
  if (!fieldError) {
    return null
  }

  return (
    <Error>{fieldError.message?.toString()}</Error>
  )
}

const Error = styled.span`
  font-size: 1.5rem;
  color: #d4443f
`