import { FC } from 'react';
import { useField } from 'formik';
import { TextInput } from 'carbon-components-react';

interface Props {
  name: string;
  label: string;
}

export const InputField: FC<Props> = ({ name, label }) => {
  const [field, { error }] = useField<string>(name);

  return (
    <TextInput
      id={name}
      labelText={label}
      invalid={!!error}
      invalidText={error}
      {...field}
    />
  );
};
