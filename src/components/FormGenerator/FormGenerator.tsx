import { FC } from 'react';
import { Form } from 'formik';
import { Button } from 'carbon-components-react';

import { FormSchema, SelectOptions } from 'types';
import { InputField, SelectField } from 'components';

function selectControl({ controlType, name, label, options }: FormSchema) {
  switch (controlType) {
    case 'input':
      return <InputField key={name} name={name} label={label} />;
    case 'select':
      const { data } = options as SelectOptions;

      return <SelectField key={name} name={name} label={label} data={data} />;
  }
}

interface Props {
  schema: FormSchema[];
}

export const FormGenerator: FC<Props> = ({ schema }) => {
  return (
    <Form>
      {schema.map((control) => selectControl(control))}
      <Button type="submit">Submit</Button>
    </Form>
  );
};
