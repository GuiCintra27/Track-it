import { styled } from "styled-components";
import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  optionsList: { value: string; text: string }[];
}

export function FormSelect({ name, optionsList, ...rest }: FormSelectProps) {
  const { register } = useFormContext();
  return (
    <Select {...register(name)} {...rest}>
      <option value="" disabled unselectable="on">
        Selecionar
      </option>

      {optionsList.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
  );
}

const Select = styled.select`
  width: 100%;
  height: 4rem;

  padding: 0.5rem;

  border-radius: 0.5rem;
  border: 2px solid var(--blue);
  background: var(--light);;

  font-size: 1.5rem;
  color: var(--dark-gray);

  &::placeholder {
    font-size: 2rem;
    color: var(--placeholder);
  }
`;
