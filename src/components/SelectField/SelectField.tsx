import { FC } from 'react';
import { useField } from 'formik';
import { Select, SelectItem } from 'carbon-components-react';

interface Props {
  name: string;
  label: string;
  data: {
    label: string;
    value: string;
  }[];
}

export const SelectField: FC<Props> = ({ name, label, data }) => {
  const [field, meta] = useField<string>(name);

  return (
    <Select id={name} labelText={label} {...field}>
      {data.map(({ label, value }) => (
        <SelectItem key={value} value={value} text={label} />
      ))}
    </Select>
  );
};
