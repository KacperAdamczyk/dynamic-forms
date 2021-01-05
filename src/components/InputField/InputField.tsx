import { FC } from 'react';
import { useField, ErrorMessage } from 'formik';
import { TextInput } from 'carbon-components-react';

interface Props {
  name: string;
  label: string;
}

export const InputField: FC<Props> = ({ name, label }) => {
  const [field, meta] = useField<string>(name);
  console.log('meta', meta);
  return (
    <>
      <TextInput id={name} labelText={label} {...field} />
      <ErrorMessage name={name} />
    </>
  );
};
